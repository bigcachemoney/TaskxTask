import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { receiveTasks, receiveTask } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: task => dispatch(receiveTask(task))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
