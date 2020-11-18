import { RECEIVE_ALL_TASKS } from '../actions/task_actions';

const tasksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_TASKS:
      return action.tasks;
    default:
      return state;
  }
};

export default tasksReducer;