import React from 'react';
import PropTypes from 'prop-types';

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
    // example
    case 'categories':
      // component = <CategoriesDrawer />;
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
          x
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
