import { 
    RECEIVE_CART,
    RECEIVE_CART_BADGE,
    RECEIVE_CART_SHOW } from '../../actions/cart_actions';


export const cartsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let nexState;
    switch (action.type) {
        case RECEIVE_CART:
            return action.cart
        case RECEIVE_CART_BADGE:
            const cartLocalStorage = {
                cartLocalStorage: JSON.parse(localStorage.getItem('cart'))
            }
            nexState = Object.assign({}, oldState, cartLocalStorage)
            return nexState
        case RECEIVE_CART_SHOW:
            nexState = Object.assign({}, oldState)
            return nexState
        default:
            return oldState
    }
}