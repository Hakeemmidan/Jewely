import { RECEIVE_CART, RECEIVE_CART_BADGE } from '../../actions/cart_actions';


export const cartsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_CART:
            return action.cart
        case RECEIVE_CART_BADGE:
            const cartLocalStorage = {
                cartLocalStorage: JSON.parse(localStorage.getItem('cart'))
            }
            let nexState = Object.assign({}, oldState, cartLocalStorage)
            return nexState
        default:
            return oldState
    }
}