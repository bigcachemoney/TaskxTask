import { combineReducers } from 'redux';

import tasks from './tasks_reducer';
import reviews from './reviews_reducer';
import users from './users_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  tasks: tasksReducer
});

export default entitiesReducer;
