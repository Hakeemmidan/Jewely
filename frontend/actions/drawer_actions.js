export const OPEN_DRAWER = 'OPEN_DRAWER';
export const CLOSE_DRAWER = 'CLOSE_DRAWER';

export const openDrawer = (drawerType, direction) => {
  return {
    type: OPEN_DRAWER,
    drawerType,
    direction,
  };
};

export const closeDrawer = (direction) => {
  return {
    type: CLOSE_DRAWER,
    direction,
  };
};
