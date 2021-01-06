import {
    SET_DRAWER_ACTIVE,
    SET_DRAWER_INACTIVE,
    SET_FORMS_FIELDS, SET_MODAL_ACTIVE, SET_MODAL_INACTIVE,
    SET_PROCESSES_DEFINITIONS,
    SET_PROCESSES_ID,
    SET_PROCESSES_TASKS,
} from './processesActions';


const initialState = {
    processesId: [],
    tasks: [],
    processesDefinitions: [],
    drawerActive: false,
    formFields: [],
    modalActive: false,
};

export const processesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_PROCESSES_ID:
            return { ...state, processesId: payload };
        case SET_PROCESSES_TASKS:
            return { ...state, tasks: payload };
        case SET_PROCESSES_DEFINITIONS:
            return { ...state, processesDefinitions: payload };
        case SET_DRAWER_ACTIVE:
            return { ...state, drawerActive: true };
        case SET_DRAWER_INACTIVE:
            return { ...state, drawerActive: false };
        case SET_FORMS_FIELDS:
            return { ...state, formFields: payload };
        case SET_MODAL_ACTIVE:
            return { ...state, modalActive: true };
        case SET_MODAL_INACTIVE:
            return { ...state, modalActive: false };
        default:
            return state;
    }
};
