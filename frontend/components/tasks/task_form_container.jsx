import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { receiveTasks, receiveTask, removeTask } from '../../actions/task_actions';
import TaskForm from './task_form';

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: task => dispatch(receiveTask(task))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
