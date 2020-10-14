import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Login from './login';

const mstp = state =>{
  return {
    errors: Object.values(state.errors.session)
  }
}


const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
});

export default connect(mstp, mapDispatchToProps)(Login);
