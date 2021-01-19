import {RECEIVE_REVIEW, REMOVE_REVIEW} from '../../actions/review_actions';

export const reviewsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState;
  switch (action.type) {
    case RECEIVE_REVIEW:
      nextState = Object.assign({}, oldState, {
        [action.review.id]: action.review,
      });
      return nextState;
    case REMOVE_REVIEW:
      nextState = Object.values(Object.assign({}, oldState));
      nextState = Object.assign(
        {},
        nextState.filter((review) => review.id !== action.reviewId)
      );
      return nextState;
    default:
      return oldState;
  }
};
