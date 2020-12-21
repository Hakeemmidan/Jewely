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
    case 'closed':
      break;
    default:
      return null;
  }

  return (
    <div
      className={`drawer-background ${drawerType === 'closed' && 'closed'}`}
      onClick={() => closeDrawer('down')}
    >
      <div
        className={`drawer-child ${direction}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="drawer-close-btn" onClick={() => closeDrawer('down')}>
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
