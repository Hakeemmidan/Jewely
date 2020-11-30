export const RECEIVE_CART = 'RECEIVE_CART';
export const RECEIVE_CART_BADGE = 'RECEIVE_CART_BADGE';
export const RECEIVE_CART_SHOW = 'RECEIVE_CART_SHOW';

import * as CartAPIUtil from '../util/cart_api_util';

const receiveCart = (cart) => {
  return {
    type: RECEIVE_CART,
    cart,
  };
};

const receiveCartBadge = () => {
  return {
    type: RECEIVE_CART_BADGE,
  };
};

// Action creators ^^^
////////////////////////////////////////////
// Thunk action creators vvv

export const fetchCartBadge = () => (dispatch) => {
  return dispatch(receiveCartBadge());
};

export const fetchCart = (id) => (dispatch) => {
  return CartAPIUtil.fetchCart(id).then((cart) => dispatch(receiveCart(cart)));
};
