import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from '../../client/LoginPage/reducer/login.reducer'

const rootReducer = combineReducers({
    login: loginReducer
});

export default rootReducer;
