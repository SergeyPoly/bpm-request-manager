import {
    ERROR_MESSAGE,
    LOGIN,
    LOGOUT,
    REMIND_PASSWORD,
} from '../../../app/store/actions';

const initialState = {
    isAuthorized: false,
    forgetPassword: false,
    userName: '',
    errorMessage: '',
};

export const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthorized: true,
                userName: action.payload,
                errorMessage: ''
            };
        case LOGOUT:
            return {
                ...state,
                isAuthorized: false,
                errorMessage: ''
            };
        case REMIND_PASSWORD:
            return {
                ...state,
                forgetPassword: !state.forgetPassword,
                errorMessage: ''
            };
        case ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};
