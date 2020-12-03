import { LOGIN, LOGOUT } from './actions';


export const loginCreator = () => {
    return {
        type: LOGIN
    }
};

export const logoutCreator = () => {
    return {
        type: LOGOUT
    }
};
