import { LOGIN, LOGOUT, REMIND_PASSWORD } from './actions';


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

export const toggleReminderCreator = () => {
    return {
        type: REMIND_PASSWORD
    }
};
