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
    <div>
      <button className="logout-navbar-button" onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting