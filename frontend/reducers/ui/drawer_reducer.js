import {OPEN_DRAWER, CLOSE_DRAWER} from '../../actions/drawer_actions';

export const drawerReducer = (oldState = {}, action) => {
  switch (action.type) {
    case OPEN_DRAWER:
      return {
        drawerType: action.drawerType,
        openDirection: action.openDirection,
        closeDirection: action.closeDirection,
      };
    case CLOSE_DRAWER:
      return {
        drawerType: 'closed',
        openDirection: '',
        closeDirection: action.closeDirection,
      };
    default:
      return oldState;
  }
};
