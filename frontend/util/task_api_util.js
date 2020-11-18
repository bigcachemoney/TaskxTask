export const allTasks = () => $.ajax({
  url: '/api/tasks',
  method: 'GET',
});