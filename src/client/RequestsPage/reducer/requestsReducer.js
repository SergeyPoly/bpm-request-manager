import {
    CLEAR_DATA,
    REQUEST_TABLE_DATA,
    SET_DRAWER_OPTIONS,
    SET_FORM_OPTIONS,
    SET_TABLE_DATA,
    TOGGLE_DRAWER_STATUS,
    TOGGLE_MODAL_STATUS,
} from './requestsActions';


const initialState = {
    tableData: [],
    tableLoading: false,
    drawerActive: false,
    drawerOptions: [],
    modalActive: false,
    formOptions: {},
};

export const requestsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REQUEST_TABLE_DATA:
            return { ...state, tableLoading: true };
        case SET_TABLE_DATA:
            return { ...state, tableData: payload, tableLoading: false };
        case SET_DRAWER_OPTIONS:
            return { ...state, drawerOptions: payload };
        case TOGGLE_DRAWER_STATUS:
            return { ...state, drawerActive: !state.drawerActive };
        case SET_FORM_OPTIONS:
            return { ...state, formOptions: payload };
        case TOGGLE_MODAL_STATUS:
            return { ...state, modalActive: !state.modalActive };
        case CLEAR_DATA:
            return { ...state, processesId: [], tasks: [], processesDefinitions: [], formFields: [], formTitle: '', formKey: ''};
        default:
            return state;
    }
};
