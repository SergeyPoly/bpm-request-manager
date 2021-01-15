import { SET_CURRENT_LANGUAGE } from './headerActions';

const initialState = {
    currentLanguage: 'ua',
};

export const headerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_CURRENT_LANGUAGE:
            return { ...state, currentLanguage: payload };
        default:
            return state;
    }
};
