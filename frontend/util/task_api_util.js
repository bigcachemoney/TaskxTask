export const getTasks = () => (
  $.ajax({
    url: `/api/tasks`,
    method: 'GET'
  })
);

export const getTask = taskId => (
  $.ajax({
    url: `/api/tasks/${taskId}`,
    method: 'GET'
  })
);

