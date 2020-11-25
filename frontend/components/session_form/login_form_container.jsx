import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
  //debugger
  return {
    errors: state.errors.session,
    formType: 'Login',
    navLink: <Link className="session-submit" to="/signup">Sign Up</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  //debugger
  // const demo = { username: "ray", password: "123456" };

  return {
    processForm: (user) => dispatch(login(user)),
    // demoLogin: () => dispatch(login(demo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
