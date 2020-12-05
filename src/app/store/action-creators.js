import { ERROR_MESSAGE, LOGIN, LOGOUT, REMIND_PASSWORD } from './actions';


export const loginCreator = (payload) => {
    return {
        type: LOGIN,
        payload
    }
};

export const logoutCreator = () => {
    return {
        type: LOGOUT
    }
};

export const toggleReminderCreator = () => {
    return {
        type: REMIND_PASSWORD
    }
};

export const setErrorMessageCreator = (payload) => {
    return {
        type: ERROR_MESSAGE,
        payload
    }
};
