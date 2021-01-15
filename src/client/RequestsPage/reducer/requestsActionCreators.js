import { parseString } from 'xml2js'

import {
    CLEAR_DATA,
    REQUEST_TABLE_DATA,
    SET_DRAWER_OPTIONS,
    SET_FORM_OPTIONS,
    SET_TABLE_DATA,
    TOGGLE_DRAWER_STATUS,
    TOGGLE_MODAL_STATUS,
} from './requestsActions';
import ProcessesService from '../services/processes.service';

const processesService = new ProcessesService();

export const setTableData = (payload) => {
    return { type: SET_TABLE_DATA, payload };
};

export const requestTableData = () => {
    return { type: REQUEST_TABLE_DATA };
};

export const toggleDrawerStatus = () => {
    return { type: TOGGLE_DRAWER_STATUS };
};

export const toggleModalStatus = () => {
    return { type: TOGGLE_MODAL_STATUS };
};

export const setDrawerOptions = (payload) => {
    return { type: SET_DRAWER_OPTIONS, payload };
};

export const setRequestPageFormOptions = (payload) => {
    return { type: SET_FORM_OPTIONS, payload };
};

export const clearData = () => {
    return { type: CLEAR_DATA };
};

export const processesIdRequestCreator = () => {
    return async ( dispatch ) => {
        dispatch(requestTableData());
        try {
            await processesService.getProcessesId()
                .then((res) => res.map(element => ({
                    id: element.id,
                    number: element.id.slice(0, 13),
                    key: element.definitionId.split(':')[0]
                })))
                .then((processesId) => dispatch(processesStatusRequestCreator(processesId)));
        } catch (err) {
            console.log(err);
        }
    }
};

export const processesStatusRequestCreator = (processesId) => {
    return async ( dispatch ) => {
        try {
            let tasks = [...processesId];
            const taskRequests = processesId.map(element => processesService.getProcessStatus(element.id));
            Promise.all(taskRequests)
                .then(responses => responses.map(
                    ([response]) => {
                        const task = tasks.find(({id}) => id === response.executionId);
                        return {...task, created: response.created, status: response.name};
                    }))
                .then(result => {
                    dispatch(processesNamesRequestCreator(result))
                })
        } catch (err) {
            console.log(err);
        }
    }
};

export const processesNamesRequestCreator = (processesIdUpdated) => {
    return async ( dispatch ) => {
        try {
            let tableData = [...processesIdUpdated];
            let processesKeysData = [];
            const keys = tableData.map(({key}) => key);
            const uniKey = Array.from(new Set(keys));
            const taskRequests = uniKey.map(element => processesService.getProcessName(element));
            Promise.all(taskRequests)
                .then(responses => responses.map(
                    ({bpmn20Xml}) => {
                        let parsedXML;
                        parseString(bpmn20Xml, (err, result) => {
                            parsedXML = result;
                        });
                        const processKeyData = parsedXML['bpmn:definitions']['bpmn:process'][0]['$'];
                        processesKeysData.push(processKeyData);
                        return processesKeysData
                    })
                )
                .then(result => {
                    for (let i = 0; i < processesKeysData.length; i++) {
                        tableData = tableData.map(element => element.key === processesKeysData[i].id ?
                            {...element, name: processesKeysData[i].name} : element);
                    }
                    tableData = tableData.map(({key, id, ...rest}) => ({...rest}));
                    const options = {
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                    };
                    for (let i = 0; i < tableData.length; i++) {
                        tableData[i].key = i+1;
                        const parseDate = new Date(Date.parse(tableData[i].created));
                        tableData[i].created = parseDate.toLocaleString("ru", options);
                    }
                    dispatch(setTableData(tableData))
                })
        } catch (err) {
            console.log(err);
        }
    }
};

export const drawerOptionsRequestCreator = () => {
    return async ( dispatch ) => {
        try {
            await processesService.getProcessDefinitions()
                .then((res) => res.map(element => ({
                    key: element.key,
                    name: element.name
                })))
                .then((processesDefinitions) => {
                    const uniDefinitions = Array.from(new Set(processesDefinitions.map(JSON.stringify))).map(JSON.parse);
                    dispatch(setDrawerOptions(uniDefinitions));
                });
        } catch (err) {
            console.log(err);
        }
    }
};

export const requestPageFormFieldsRequestCreator = (key, name) => {
    return async ( dispatch ) => {
        try {
            await processesService.getProcessName(key)
                .then(({bpmn20Xml}) => {
                    let parsedXML;
                    parseString(bpmn20Xml, (err, result) => {
                        parsedXML = result;
                    });
                    const fieldsData = parsedXML['bpmn:definitions']['bpmn:process'][0]['bpmn:startEvent'][0]['bpmn:extensionElements'][0]['camunda:formData'][0]['camunda:formField'];
                    const formFields = fieldsData.map(element => element['camunda:value'] ?
                        {...element['$'], options: element['camunda:value'].map(element => element['$'])} :
                        element['$']);
                    dispatch(setRequestPageFormOptions({formFields, name, key}));
                    dispatch(toggleModalStatus())
                });
        } catch (err) {
            console.log(err);
        }
    }
};

export const startNewProcessRequestCreator = (formKey, formData) => {
    return async ( dispatch ) => {
        try {
            await processesService.startNewProcess(formKey, formData)
                .then(res => {
                    if (res.status === 200) {
                        dispatch(processesIdRequestCreator());
                    }
                });
        } catch (err) {
            console.log(err);
        }
    }
};
