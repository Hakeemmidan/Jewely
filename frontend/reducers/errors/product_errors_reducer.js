import {
  RECEIVE_PRODUCT,
  RECEIVE_PRODUCT_ERRORS,
} from '../../actions/product_actions';

export const productErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT:
      return [];
    case RECEIVE_PRODUCT_ERRORS:
      return Object.assign([], action.errors);
    default:
      return state;
  }
};
