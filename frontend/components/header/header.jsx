import React from 'react';
import {Link} from 'react-router-dom';
import FilterFormContainer from '../filter/filter_form_container';
import GreetingContainer from '../greeting/greeting_container';

export function Header() {
  return (
    <>
      <div className="top-bar">
        <Link to="/" className="logo">
          {' '}
          Jewely{' '}
        </Link>
        <FilterFormContainer />
        <GreetingContainer />
      </div>
      <hr className="top-bar-divider" />
    </>
  );
}
