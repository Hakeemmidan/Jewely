import {
    RECEIVE_REVIEW_ERRORS
} from '../../actions/product_actions';

export const reviewErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_REVIEW_ERRORS:
            return Object.assign([], action.errors);
        default:
            return state;
    }
};