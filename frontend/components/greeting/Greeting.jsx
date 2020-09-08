import React from 'react';
import {Link} from 'react-router-dom';
import {CartIcon} from '../../util/cart_icons';
import CartBadgeContainer from '../carts/show/cart_badge/cart_badge_container';

const Greeting = ({currentUser, logout}) => {
  const sessionLinks = () => (
    <nav className="navbar-right-side-content">
      <Link to="/signup" className="text-link-underline-hover">
        Register
      </Link>
      <Link to="/login" className="login-navbar-button">
        Login
      </Link>
      <Link to="/cart" className="cart-navbar-icon">
        <CartIcon />
        <CartBadgeContainer />
      </Link>
    </nav>
  );
  const personalGreeting = () => (
    <div className="navbar-right-side-content">
      <Link to={`/products/create`} className="text-link-underline-hover">
        Sell On Jewely
      </Link>
      <button className="logout-navbar-button" onClick={logout}>
        Log Out
      </button>
      <Link to="/cart" className="cart-navbar-icon">
        <CartIcon />
        <CartBadgeContainer />
      </Link>

      <Link
        className="navbar-current-user-show-page-link"
        to={`/users/${currentUser.id}`}
      >
        {currentUser.username}
      </Link>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
