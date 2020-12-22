import {parseStringPromise} from 'xml2js'

import {
    SET_DRAWER_ACTIVE, SET_DRAWER_INACTIVE,
    SET_PROCESSES_ID,
    SET_PROCESSES_TASKS,
} from './processesActions';
import ProcessesService from '../services/processes.service';

const processesService = new ProcessesService();

export const setProcessesId = (payload) => {
    return { type: SET_PROCESSES_ID, payload };
};

export const setProcessesTasks = (payload) => {
    return { type: SET_PROCESSES_TASKS, payload };
};

export const setDrawerActive = () => {
    return { type: SET_DRAWER_ACTIVE };
};

export const setDrawerInactive = () => {
    return { type: SET_DRAWER_INACTIVE };
};

export const processesIdRequestCreator = () => {
    return async ( dispatch ) => {
        try {
            await processesService.getProcessesId()
                .then((res) => res.map(element => ({
                    id: element.id,
                    number: element.id.slice(0, 13),
                    key: element.definitionId.split(':')[0]
                })))
                .then((processesId) => dispatch(setProcessesId(processesId)));
        } catch (err) {
            console.log(err);
        }
    }
};

export const processesTasksRequestCreator = (processesId) => {
    return async ( dispatch ) => {
        try {
            let tasks = [...processesId];
            const taskRequests = processesId.map(element => processesService.getProcessTask(element.id));
            Promise.all(taskRequests)
                .then(responses => responses.map(
                    ([response]) => {
                        const task = tasks.find(({id}) => id === response.executionId);
                        return {...task, created: response.created, status: response.name};
                    }))
                .then(result => {
                    dispatch(processesXMLRequestCreator(result))
                })
        } catch (err) {
            console.log(err);
        }
    }
};

export const processesXMLRequestCreator = (processesIdUpdated) => {
    return async ( dispatch ) => {
        try {
            let tasks = [...processesIdUpdated];
            let XMLpropcessData = [];
            const keys = tasks.map(({key}) => key);
            const uniKey = Array.from(new Set(keys));
            const taskRequests = uniKey.map(element => processesService.getProcessName(element));
            Promise.all(taskRequests)
                .then(responses => responses.map(
                    async response => {
                        let result = await parseStringPromise(response.bpmn20Xml)
                            .then(result => {
                                const processedXML = result['bpmn:definitions']['bpmn:process'][0]['$'];
                                XMLpropcessData.push(processedXML);
                            });
                        return XMLpropcessData
                    })
                )
                .then(result => {
                    for (let i = 0; i < XMLpropcessData.length; i++) {
                        tasks = tasks.map(element => element.key === XMLpropcessData[i].id ?
                            {...element, name: XMLpropcessData[i].name} : element);
                    }
                    tasks = tasks.map(({key, id, ...rest}) => ({...rest}));
                    const options = {
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                    };
                    for (let i = 0; i < tasks.length; i++) {
                        tasks[i].key = i+1;
                        const parseDate = new Date(Date.parse(tasks[i].created));
                        tasks[i].created = parseDate.toLocaleString("ru", options);
                    }
                    dispatch(setProcessesTasks(tasks))
                })
        } catch (err) {
            console.log(err);
        }
    }
};

