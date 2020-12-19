import React from 'react';
import PropTypes from 'prop-types';

export function Drawer({drawerType, direction, closeDrawer}) {
  if (!drawerType) {
    return null;
  }

  let component;

  switch (drawerType) {
    // example
    case 'categories':
      // component = <CategoriesDrawer />;
      break;
    default:
      return null;
  }

  return (
    <div>
      <div className="drawer-background" onClick={closeDrawer}>
        <div
          className={`drawer-child ${direction}`}
          onClick={(e) => e.stopPropagation()}
        >
          {component}
          Some content
        </div>
      </div>
    </div>
  );
}

Drawer.propTypes = {
  drawerType: PropTypes.string,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
};
