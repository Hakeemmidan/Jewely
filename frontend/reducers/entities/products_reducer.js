import {
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_PRODUCT,
  REMOVE_PRODUCT,
} from '../../actions/product_actions';

export const productsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState;
  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      return action.products;
    case RECEIVE_PRODUCT:
      nextState = Object.assign({}, oldState, {
        [action.product.id]: action.product,
      });
      return nextState;
    case REMOVE_PRODUCT:
      nextState = Object.assign({}, oldState);
      delete nextState[action.productId];
      return nextState;
    default:
      return oldState;
  }
};
