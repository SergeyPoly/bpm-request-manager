import { LOGIN, LOGOUT } from '../../store/actions';

const initialState = {
    isAuth: false,
};

export const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuth: true,
            };
        case LOGOUT:
            return {
                ...state,
                isAuth: false
            };
        default:
            return state;
    }
};
