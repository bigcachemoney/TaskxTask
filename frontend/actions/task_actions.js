import * as TaskAPIUtil from '../util/task_api_util';

export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
// export const REMOVE_TASK = "REMOVE_TASK";


const receiveTasks = tasks => {
  //debugger
  return ({
    type: RECEIVE_TASKS,
    tasks
  })
};

const receiveTask = task => {
  //debugger
  return ({
    type: RECEIVE_TASK,
    task
  })
};

// export const removeTask = taskId => {
//   //debugger
//   return ({
//     type: REMOVE_TASK,
//     taskId
//   })
// };

export const fetchTasks = () => dispatch => {
  //debugger
  return TaskAPIUtil.fetchTasks()
    .then((tasks) => dispatch(receiveTasks(tasks)))
};

export const fetchTask = taskId => dispatch => {
  //debugger
  return TaskAPIUtil.fetchTask(taskId)
    .then((task) => dispatch(receiveTask(task)))
};

// export const deleteTask = (taskId) => dispatch => {
//   //debugger
//   return TaskAPIUtil.deleteTask(taskId)
//   .then(() => dispatch(removeTask(taskId)))
// };
