import { allTasks } from '../util/task_api_util';

export const RECEIVE_ALL_TASKS = 'RECEIVE_ALL_TASKS';

const receiveAllTasks = (tasks) => ({
  type: RECEIVE_ALL_TAKS,
  tasks,
});

export const receiveTasks = () => (dispatch) => (allTasks())
  .then((tasks) => dispatch(receiveAllTasks(tasks)));