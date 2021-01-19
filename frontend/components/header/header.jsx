import React from 'react';
import {Link} from 'react-router-dom';
import {FilterFormContainer} from '../filter/filter_form_container';
import {GreetingContainer} from '../greeting/greeting_container';
import {HeaderCategoriesContainer} from './categories/header_categories_container';

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
      <div className="header-categories top-bar">
        <HeaderCategoriesContainer />
      </div>
      <hr className="top-bar-divider" />
    </>
  );
}
