import { SET_PROCESSES_ID, SET_PROCESSES_TASKS } from './processesActions';


const initialState = {
    processesId: [],
    totalPages: 1,
    currentPage: 1,
    tasks: []
};

export const processesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_PROCESSES_ID:
            const totalPages = Math.ceil(payload.length / 10);
            return { ...state, processesId: payload, totalPages: totalPages };
        case SET_PROCESSES_TASKS:
            return { ...state, tasks: payload };
        default:
            return state;
    }
};
