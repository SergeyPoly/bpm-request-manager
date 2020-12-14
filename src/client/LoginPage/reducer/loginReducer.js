import {
    LOGOUT,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    TOGGLE_LOGIN_PAGE_FORM,
} from './loginActions';

const initialState = {
    isAuthorized: false,
    loading: false,
    errorMessage: null,
    forgetPassword: false,
    userName: null,
    reminderFormActive: false
};

export const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return { ...state, loading: true, errorMessage: null };
        case LOGIN_SUCCESS:
            return { ...state, isAuthorized: true, loading: false, userName: payload, };
        case LOGIN_FAILED:
            const errorMessage = (payload === 401) ? 'wrong login or password' : `server error: ${payload}`;
            return { ...state, isAuthorized: false, loading: false, errorMessage };
        case LOGOUT:
            return { ...state, isAuthorized: false, userName: null, errorMessage: null };
        case TOGGLE_LOGIN_PAGE_FORM:
            return { ...state, reminderFormActive: !state.reminderFormActive, errorMessage: null };
        default:
            return state;
    }
};
