import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './SessionForm';

const mapStateToProps = ({ errors }) => {

  return {
    errors: errors.session,
    formType: 'login',
    navLink: <Link className="session-form-nav-button" to="/signup">Register</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);