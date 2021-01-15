import { combineReducers } from '@reduxjs/toolkit';

import { authReducer } from '../../client/AuthPage/reducer/authReducer'
import { requestsReducer } from '../../client/RequestsPage/reducer/requestsReducer';
import { headerReducer } from '../../client/Header/reducer/headerReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    requests: requestsReducer,
    header: headerReducer
});

export default rootReducer;
