import { 
    RECEIVE_ALL_PRODUCTS, 
    RECEIVE_PRODUCT,
    REMOVE_PRODUCT,
    RECEIVE_ERRORS } from '../../actions/product_actions';

// keeps tracks of product-creation errors
export const productErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS || RECEIVE_PRODUCT || REMOVE_PRODUCT:
            return [];
        case RECEIVE_ERRORS:
            return action.errors;
        default:
            return state;
    }
};