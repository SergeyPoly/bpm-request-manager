import { createSlice } from '@reduxjs/toolkit';

export const processesSlice = createSlice({
    name: 'processes',
    initialState: {
        tableLoading: false,
        drawerActive: false,
        newProcessModalActive: false,
        stepsModalActive: false,
        processStepsData: {
            processSteps: [],
            currentStepIndex: 0
        },
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
        toggleNewProcessModalStatus: state => ({ ...state, newProcessModalActive: !state.newProcessModalActive }),
        toggleStepsModalStatus: state => ({ ...state, stepsModalActive: !state.stepsModalActive }),
        setProcessSteps: (state, action) => ({ ...state, processStepsData: action.payload }),
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
    toggleNewProcessModalStatus,
    toggleStepsModalStatus,
    setProcessSteps,
    clearData
} = processesSlice.actions;

