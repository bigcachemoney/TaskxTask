import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  debugger
  return {
    errors: errors.session,
    formType: 'Sign Up',
    navLink: <Link to="/login">Log In</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  debugger
  return {
    processForm: (user) => dispatch(signup(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
