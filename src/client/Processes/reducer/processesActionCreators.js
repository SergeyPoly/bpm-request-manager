import { parseString } from 'xml2js'

import {
    requestTableData,
    setTableData,
    setDrawerOptions,
    setFormOptions,
    toggleNewProcessModalStatus, toggleStepsModalStatus, setProcessSteps,
} from './processesReducer';
import ProcessesService from '../services/processes.service';

const processesService = new ProcessesService();

export const processesIdRequestCreator = () => {
    return async ( dispatch ) => {
        dispatch(requestTableData());
        try {
            await processesService.getProcessesId()
                .then((res) => res.map(element => ({
                    id: element.id,
                    number: element.id.slice(0, 13),
                    processKey: element.definitionId.split(':')[0]
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
            const tasks = [...processesId];
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
            const keys = tableData.map(({processKey}) => processKey);
            const uniKey = Array.from(new Set(keys));
            const taskRequests = uniKey.map(element => processesService.getProcessXML(element));
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
                    processesKeysData.forEach((item)=> {
                        tableData = tableData.map(element => element.processKey === item.id ?
                            {...element, name: item.name} : element);
                    });
                    tableData = tableData.map(({id, ...rest}) => rest);
                    const options = {
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                    };
                    tableData.forEach((item, index) => {
                        item.key = index+1;
                        const parseDate = new Date(Date.parse(item.created));
                        item.created = parseDate.toLocaleString("ru", options);
                    });
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
            await processesService.getProcessesDefinitions()
                .then((res) => res.map(({key, name}) => ({
                    key,
                    name
                })))
                .then((processesDefinitions) => {
                    const drawerOptions = Array.from(new Set(processesDefinitions.map(JSON.stringify))).map(JSON.parse);
                    dispatch(setDrawerOptions(drawerOptions));
                });
        } catch (err) {
            console.log(err);
        }
    }
};

export const requestPageFormFieldsRequestCreator = (key, name) => {
    return async ( dispatch ) => {
        try {
            await processesService.getProcessXML(key)
                .then(({bpmn20Xml}) => {
                    let parsedXML;
                    parseString(bpmn20Xml, (err, result) => {
                        parsedXML = result;
                    });
                    const fieldsData = parsedXML['bpmn:definitions']['bpmn:process'][0]['bpmn:startEvent'][0]['bpmn:extensionElements'][0]['camunda:formData'][0]['camunda:formField'];
                    const formFields = fieldsData.map(element => element['camunda:value'] ?
                        {...element['$'], options: element['camunda:value'].map(element => element['$'])} :
                        element['$']);
                    dispatch(setFormOptions({formFields, name, key}));
                    dispatch(toggleNewProcessModalStatus())
                });
        } catch (err) {
            console.log(err);
        }
    }
};

export const processStepsRequestCreator = (key, status) => {
    return async ( dispatch ) => {
        try {
            await processesService.getProcessXML(key)
                .then(({bpmn20Xml}) => {
                    let parsedXML;
                    parseString(bpmn20Xml, (err, result) => {
                        parsedXML = result;
                    });
                    const stepsData = parsedXML['bpmn:definitions']['bpmn:process'][0]['bpmn:userTask'];
                    const processSteps = stepsData.map(element => element['$']['name']);
                    const currentStepIndex = processSteps.indexOf(status);
                    dispatch(setProcessSteps({processSteps, currentStepIndex}));
                    dispatch(toggleStepsModalStatus());
                    console.log()
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
