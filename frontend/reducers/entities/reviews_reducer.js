import {
    RECEIVE_ALL_REVIEWS,
    RECEIVE_REVIEW,
    REMOVE_REVIEW
} from '../../actions/review_actions'


export const reviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let nextState;
    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            return action.reviews
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