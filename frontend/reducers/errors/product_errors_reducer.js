import { 
    RECEIVE_PRODUCT_ERRORS } from '../../actions/product_actions';

// keeps tracks of product-creation errors
export const productErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PRODUCT_ERRORS:        
            // return action.errors    
            return action.errors;
        default:
            return state;
    }
};