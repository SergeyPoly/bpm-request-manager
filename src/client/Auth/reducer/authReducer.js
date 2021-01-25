import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthorized: false,
        isFetching: false, //unused property, required in further development
        reminderActive: false,
        username: null,
        errorStatus: null
    },
    reducers: {
        loginRequest: state => ({ ...state, isFetching: true, errorStatus: null }),
        fetchLoginSuccess: (state, action) =>({ ...state, isAuthorized: true, isFetching: false, username: action.payload }),
        fetchLoginFailed: (state, action) => ({ ...state, isAuthorized: false, isFetching: false, errorStatus: action.payload }),
        logout: state => ({ ...state, isAuthorized: false, userName: null, errorStatus: null }),
        toggleAuthPageForm: state => ({ ...state, reminderActive: !state.reminderActive, errorStatus: null })
    }
});

export const {
    loginRequest,
    fetchLoginSuccess,
    fetchLoginFailed,
    logout,
    toggleAuthPageForm
} = authSlice.actions;

