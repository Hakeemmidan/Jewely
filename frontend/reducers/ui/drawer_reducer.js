import {OPEN_DRAWER, CLOSE_DRAWER} from '../../actions/drawer_actions';

export const drawerReducer = (oldState = null, action) => {
  switch (action.type) {
    case OPEN_DRAWER:
      return {drawerType: action.drawerType, direction: action.direction};
    case CLOSE_DRAWER:
      return null;
    default:
      return oldState;
  }
};
