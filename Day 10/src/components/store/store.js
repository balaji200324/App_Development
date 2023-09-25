import { createStore, combineReducers } from 'redux';
import authReducer from '../actions/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer);

export default store;
