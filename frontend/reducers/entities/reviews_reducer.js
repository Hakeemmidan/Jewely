import {
    RECEIVE_REVIEW,
    REMOVE_REVIEW
} from '../../actions/review_actions'

import {
    RECEIVE_PRODUCT
} from '../../actions/product_actions';

export const reviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let nextState;
    switch (action.type) {
        case RECEIVE_PRODUCT:
            nextState = Object.assign({}, oldState, action.reviews)
            return nextState
        case RECEIVE_REVIEW:
            nextState = Object.assign({}, oldState, {
                [action.review.id]: action.review
            })
            return nextState
        case REMOVE_REVIEW:
            nextState = Object.assign({}, oldState)
            delete nextState.reviews[action.reviewId]
            return nextState
        default:
            return oldState
    }
}