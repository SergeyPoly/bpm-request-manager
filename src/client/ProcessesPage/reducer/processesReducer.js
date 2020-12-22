import {
    SET_DRAWER_ACTIVE, SET_DRAWER_INACTIVE,
    SET_PROCESSES_ID,
    SET_PROCESSES_TASKS,
} from './processesActions';


const initialState = {
    processesId: [],
    tasks: [],
    drawerActive: false,
};

export const processesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_PROCESSES_ID:
            return { ...state, processesId: payload };
        case SET_PROCESSES_TASKS:
            return { ...state, tasks: payload };
        case SET_DRAWER_ACTIVE:
            return { ...state, drawerActive: true };
        case SET_DRAWER_INACTIVE:
            return { ...state, drawerActive: false };
        default:
            return state;
    }
};
