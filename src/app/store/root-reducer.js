import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from '../../client/LoginPage/reducer/loginReducer'
import { processesReducer } from '../../client/ProcessesPage/reducer/processesReducer';

const rootReducer = combineReducers({
    login: loginReducer,
    processes: processesReducer,
});

export default rootReducer;
