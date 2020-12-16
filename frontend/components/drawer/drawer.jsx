import React from 'react';
import PropTypes from 'prop-types';

export function Drawer({drawer, direction, closeDrawer}) {
  if (!drawer) {
    return null;
  }

  let component;

  switch (drawer) {
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
  drawer: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
};
