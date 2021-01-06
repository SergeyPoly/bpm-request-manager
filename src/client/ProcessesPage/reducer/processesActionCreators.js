import {parseStringPromise} from 'xml2js'

import {
    SET_DRAWER_ACTIVE,
    SET_DRAWER_INACTIVE, SET_FORM_TITLE,
    SET_FORMS_FIELDS, SET_MODAL_ACTIVE, SET_MODAL_INACTIVE,
    SET_PROCESSES_DEFINITIONS,
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

export const setModalActive = () => {
    return { type: SET_MODAL_ACTIVE };
};

export const setModalInactive = () => {
    return { type: SET_MODAL_INACTIVE };
};

export const setProcessesDefinitions = (payload) => {
    return { type: SET_PROCESSES_DEFINITIONS, payload };
};

export const setProcessesFormsFields = (payload) => {
    return { type: SET_FORMS_FIELDS, payload };
};

export const setProcessesFormTitle = (payload) => {
    return { type: SET_FORM_TITLE, payload };
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
            let XMLprocessData = [];
            const keys = tasks.map(({key}) => key);
            const uniKey = Array.from(new Set(keys));
            const taskRequests = uniKey.map(element => processesService.getProcessPropertiesXML(element));
            Promise.all(taskRequests)
                .then(responses => responses.map(
                    async response => {
                        let result = await parseStringPromise(response.bpmn20Xml)
                            .then(result => {
                                const processedXML = result['bpmn:definitions']['bpmn:process'][0]['$'];
                                XMLprocessData.push(processedXML);
                            });
                        return XMLprocessData
                    })
                )
                .then(result => {
                    for (let i = 0; i < XMLprocessData.length; i++) {
                        tasks = tasks.map(element => element.key === XMLprocessData[i].id ?
                            {...element, name: XMLprocessData[i].name} : element);
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

export const processesDefinitionsRequestCreator = () => {
    return async ( dispatch ) => {
        try {
            await processesService.getProcessDefinitions()
                .then((res) => res.map(element => ({
                    key: element.key,
                    name: element.name
                })))
                .then((processesDefinitions) => {
                    const uniDefinitions = Array.from(new Set(processesDefinitions.map(JSON.stringify))).map(JSON.parse);
                    dispatch(setProcessesDefinitions(uniDefinitions));
                });
        } catch (err) {
            console.log(err);
        }
    }
};

export const processesFormFieldsRequestCreator = (key) => {
    return async ( dispatch ) => {
        try {
            await processesService.getProcessPropertiesXML(key)
                .then(res => parseStringPromise(res.bpmn20Xml))
                .then(result => {
                    const processedXML = result['bpmn:definitions']['bpmn:process'][0]['bpmn:startEvent'][0]['bpmn:extensionElements'][0]['camunda:formData'][0]['camunda:formField'];
                    const formFields = processedXML.map(element => element['camunda:value'] ?
                        {...element['$'], options: element['camunda:value'].map(element => element['$'])} :
                        element['$']);
                    dispatch(setProcessesFormsFields(formFields));
                    dispatch(setModalActive())
                });
        } catch (err) {
            console.log(err);
        }
    }
};

