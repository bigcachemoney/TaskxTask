import * as TaskAPIUtil from '../util/task_api_util';

export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';

const receiveTasks = tasks => ({
  type: RECEIVE_TASKS,
  tasks
});
const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});

export const fetchTasks = () => dispatch => (
  TaskAPIUtil.getTasks()
    .then((tasks) => dispatch(receiveTasks(tasks)))
);

export const fetchTask = taskId => dispatch => (
  TaskAPIUtil.getTask(taskId)
    .then((task) => dispatch(receiveTasks(task)))
);