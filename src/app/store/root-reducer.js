import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from '../componets/LoginForm/login.reducer'

const rootReducer = combineReducers({
    login: loginReducer
});

export default rootReducer;
