import React from 'react';
import { Link } from 'react-router-dom';
import { CartIcon } from '../../util/icons';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav>
      <Link to="/signup" className="text-link-underline-hover">Register</Link>
      <Link to="/login" className="login-navbar-button">Login</Link>
      <Link to="/cart" className="cart-navbar-icon">
        <CartIcon/>
        <span className="cart-item-count-badge">
          {JSON.parse(localStorage.cart).length}
        </span>
        {/* question ) How to make cart badge thing update when a user adds stuff to thier cart? */}
      </Link>
    </nav>
  );
  const personalGreeting = () => (
    <div>
      <Link to={`/products/create`}>Sell On Jewely</Link>
      <button className="logout-navbar-button" onClick={logout}>Log Out</button>
      <Link to="/cart" className="cart-navbar-icon">
        <CartIcon />
        <span className="cart-item-count-badge">
          {JSON.parse(localStorage.cart).length}
        </span>
      </Link>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting