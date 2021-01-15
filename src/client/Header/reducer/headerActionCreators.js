import { SET_CURRENT_LANGUAGE } from './headerActions';

export const setCurrentLanguage = (payload) => {
    return { type: SET_CURRENT_LANGUAGE, payload };
};
