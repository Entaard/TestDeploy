import { combineReducers } from 'redux';
import UserReducer from './UsersReducer';

const rootReducer = combineReducers({
  users: UserReducer
});

export default rootReducer;
