import { RECEIVE_CART } from '../../actions/cart_actions';


export const cartsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_CART:
            return action.cart
        default:
            return oldState
    }
}