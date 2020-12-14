import {
    LOGOUT,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    TOGGLE_LOGIN_PAGE_FORM,
} from './loginActions';
import AuthService from '../services/auth.service';

const authServ = new AuthService();

export const loginRequest = () => {
    return { type: LOGIN_REQUEST };
};

export const loginSuccess = (payload) => {
    return { type: LOGIN_SUCCESS, payload };
};

export const loginFailed = (payload) => {
    return { type: LOGIN_FAILED, payload };
};

export const logout = () => {
    return { type: LOGOUT }
};

export const toggleLoginPageForm = () => {
    return {
        type: TOGGLE_LOGIN_PAGE_FORM
    }
};

export const loginRequestCreator = ({ username, password }) => {
    return async ( dispatch ) => {
        dispatch(loginRequest());
        try {
            await authServ.login({ username, password });
            dispatch(loginSuccess(username));
        } catch (err) {
            dispatch(loginFailed(err.response.status));
        }
    }
};

export const logoutRequestCreator = () => {
    return async ( dispatch ) => {
        await authServ.logout();
        dispatch(logout());
    }
};


