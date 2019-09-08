import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav>
      <Link to="/signup" className="register-navbar-button">Register</Link>
      <Link to="/login" className="login-navbar-button">Login</Link>
    </nav>
  );
  const personalGreeting = () => (
    <header>
      <h5 className="header-name">Hi, {currentUser.username}!</h5>
      <button className="logout-navbar-button" onClick={logout}>Log Out</button>
    </header>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting