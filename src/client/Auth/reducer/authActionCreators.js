import AuthService from '../services/auth.service';
import {
    loginRequest,
    fetchLoginSuccess,
    fetchLoginFailed,
    logout
} from './authReducer';

const authServ = new AuthService();

export const fetchLoginRequest = ({ username, password }) => {
    return async ( dispatch ) => {
        dispatch(loginRequest());
        try {
            await authServ.login({ username, password });
            dispatch(fetchLoginSuccess(username));
        } catch (err) {
            if (err.name === 'InvalidCharacterError') {
                dispatch(fetchLoginFailed(401));
            } else {
                dispatch(fetchLoginFailed(err.response.status));
            }
        }
    }
};

export const logoutRequestCreator = () => {
    return async ( dispatch ) => {
        await authServ.logout();
        dispatch(logout());
    }
};


