export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
import * as ReviewAPIUtil from '../util/review_api_util';

const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_REVIEW_ERRORS,
        errors
    }
}

const deleteReview = (reviewId) => {
    return {
        type: REMOVE_REVIEW,
        reviewId
    }
}

// Action creators ^^^
////////////////////////////////////////////
// Thunk action creators vvv

export const fetchReview = (id) => dispatch => {
    return ProductAPIUtil.fetchReview(id)
        .then(review => dispatch(receiveReview(review)))
}

export const updateReview = (review) => dispatch => {
    return ReviewAPIUtil.updateReview(review)
            .then(review => dispatch(receiveReview(review))),
            errs => dispatch(receiveErrors(errs.responseJSON))
}

export const createReview = (review) => dispatch => {
    return ReviewAPIUtil.createReview(review)
        .then(review => dispatch(receiveReview(review)),
            errs => dispatch(receiveErrors(errs.responseJSON)))
}

export const removeReview = (reviewId) => dispatch => {
    return ReviewAPIUtil.removeReview(reviewId)
            .then(() => dispatch(deleteReview(reviewId))),
            errs => dispatch(receiveReviews(errs.responseJSON))
}