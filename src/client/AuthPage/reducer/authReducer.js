import {
    LOGOUT,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    TOGGLE_AUTH_PAGE_FORM,
} from './authActions';

const initialState = {
    isAuthorized: false,
    loading: false,
    errorMessage: null,
    forgetPassword: false,
    username: null,
    reminderActive: false
};

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return { ...state, loading: true, errorMessage: null };
        case LOGIN_SUCCESS:
            return { ...state, isAuthorized: true, loading: false, username: payload, };
        case LOGIN_FAILED:
            const errorMessage = (payload === 401) ? 'невірний логін або пароль' : `помилка серверу: ${payload}`;
            return { ...state, isAuthorized: false, loading: false, errorMessage };
        case LOGOUT:
            return { ...state, isAuthorized: false, userName: null, errorMessage: null };
        case TOGGLE_AUTH_PAGE_FORM:
            return { ...state, reminderActive: !state.reminderActive, errorMessage: null };
        default:
            return state;
    }
};
