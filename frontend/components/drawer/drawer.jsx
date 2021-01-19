import React from 'react';
import PropTypes from 'prop-types';
import {CategoriesDrawerContainer} from './categories/categories_drawer_container';

export function Drawer({
  drawerType,
  openDirection,
  closeDirection,
  closeDrawer,
}) {
  if (!drawerType) {
    return null;
  }

  let component;

  switch (drawerType) {
    case 'categories':
      component = <CategoriesDrawerContainer />;
      break;
    case 'closed':
      break;
    default:
      return null;
  }

  return (
    <div
      className={`drawer-background ${drawerType === 'closed' && 'closed'}`}
      onClick={() => closeDrawer(closeDirection)}
    >
      <div
        className={`drawer-child ${openDirection || closeDirection}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="drawer-close-btn"
          onClick={() => closeDrawer(closeDirection)}
        >
          <span>x</span>
        </div>
        {component}
      </div>
    </div>
  );
}

Drawer.propTypes = {
  drawerType: PropTypes.string,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
};
