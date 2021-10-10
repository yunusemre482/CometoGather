import {combineReducers} from 'redux';
import authReducer from './authReducer';
import clubReducer from './clubReducer';
const rootReducer = combineReducers(
  { 
    club: clubReducer,
    auth: authReducer
  }
  );

export default rootReducer;
