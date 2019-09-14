export const RECEIVE_CART = 'RECEIVE_CART';
import * as CartAPIUtil from '../util/cart_api_util';

const receiveCart = (cart) => {
    return {
        type: RECEIVE_CART,
        cart
    }
}

// Action creators ^^^
////////////////////////////////////////////
// Thunk action creators vvv

export const fetchCart = (id) => dispatch => {
    return CartAPIUtil.fetchCart(id)
        .then(cart => dispatch(receiveCart(cart)))
}