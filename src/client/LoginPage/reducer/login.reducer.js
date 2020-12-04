import { LOGIN, LOGOUT, REMIND_PASSWORD } from '../../../app/store/actions';

const initialState = {
    isAuthorized: false,
    forgetPassword: false,
    userName: '',
};

export const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthorized: true,
                userName: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                isAuthorized: false
            };
        case REMIND_PASSWORD:
            return {
                ...state,
                forgetPassword: !state.forgetPassword
            };
        default:
            return state;
    }
};
