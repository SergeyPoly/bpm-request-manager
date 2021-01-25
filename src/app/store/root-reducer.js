import { combineReducers } from '@reduxjs/toolkit';

import { authSlice } from '../../client/Auth/reducer/authReducer'
import { processesSlice } from '../../client/Processes/reducer/processesReducer';

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    processes: processesSlice.reducer,
});

export default rootReducer;
