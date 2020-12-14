import { SET_PROCESSES_ID, SET_PROCESSES_TASKS } from './processesActions';


const initialState = {
    processesId: [],
    tasks: []
};

export const processesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_PROCESSES_ID:
            return { ...state, processesId: payload };
        case SET_PROCESSES_TASKS:
            return { ...state, tasks: payload };
        default:
            return state;
    }
};
