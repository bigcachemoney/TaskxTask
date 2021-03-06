import React from 'react';
import { connect } from 'react-redux';
import Nav from './nav';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  //debugger
  return ({
    loggedIn: Boolean(state.session.id)
  });
}

const mapDispatchToProps = dispatch => {
  //debugger
  return ({
    logout: () => (dispatch(logout()))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav); 