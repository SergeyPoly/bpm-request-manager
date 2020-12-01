import { combineReducers } from '@reduxjs/toolkit';
import { exampleReducer } from '../../client/example/reducer/example.reeducer';

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;
