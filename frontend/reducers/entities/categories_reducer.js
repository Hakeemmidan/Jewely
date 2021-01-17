import {RECEIVE_ALL_CATEGORIES} from '../../actions/categories_actions';

export const categoriesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_CATEGORIES:
      return action.categories;
    default:
      return oldState;
  }
};
