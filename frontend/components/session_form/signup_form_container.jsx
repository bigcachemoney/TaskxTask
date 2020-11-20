import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  debugger
  return {
    errors: errors.session,
    formType: 'sign up',
    navLink: <Link to="/login">log in</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  debugger
  return {
    processForm: (user) => dispatch(signup(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
