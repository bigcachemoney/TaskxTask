import { combineReducers } from 'redux';

import tasksReducer from './tasks_reducer';
// import reviews from './reviews_reducer';
import usersReducer from './users_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  tasks: tasksReducer,
});

export default entitiesReducer;
