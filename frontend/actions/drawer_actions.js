export const OPEN_DRAWER = 'OPEN_DRAWER';
export const CLOSE_DRAWER = 'CLOSE_DRAWER';

export const openDrawer = (drawerType, openDirection, closeDirection) => {
  return {
    type: OPEN_DRAWER,
    drawerType,
    openDirection,
    closeDirection,
  };
};

export const closeDrawer = (closeDirection) => {
  return {
    type: CLOSE_DRAWER,
    closeDirection: closeDirection,
  };
};
