import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchTasks, fetchTask, deleteTask } from '../../actions/task_actions';
import TaskForm from './task_form';

const mapState = state => {
  return {
    tasks: state.entities.tasks
  };
};

const mapDispatch = dispatch => {
  return {
    action: task => dispatch(fetchTask(task))
  };
};

export default connect(mapState, mapDispatch)(TaskForm);
