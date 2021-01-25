import { createSlice } from '@reduxjs/toolkit';

export const processesSlice = createSlice({
    name: 'processes',
    initialState: {
        tableLoading: false,
        drawerActive: false,
        modalActive: false,
        tableData: [],
        drawerOptions: [],
        formOptions: {
            formFields: [],
            name: null,
            key: null
        },
    },
    reducers: {
        requestTableData: state => ({ ...state, tableLoading: true }),
        setTableData: (state, action) => ({ ...state, tableData: action.payload, tableLoading: false }),
        setDrawerOptions: (state, action) => ({ ...state, drawerOptions: action.payload }),
        toggleDrawerStatus: state => ({ ...state, drawerActive: !state.drawerActive }),
        setFormOptions: (state, action) => ({ ...state, formOptions: action.payload }),
        toggleModalStatus: state => ({ ...state, modalActive: !state.modalActive }),
        clearData: state => ({ ...state,
            tableData: [],
            drawerOptions: [],
            formOptions: {
                formFields: [],
                name: null,
                key: null
            }
        }),
    }
});

export const {
    requestTableData,
    setTableData,
    setDrawerOptions,
    toggleDrawerStatus,
    setFormOptions,
    toggleModalStatus,
    clearData
} = processesSlice.actions;

