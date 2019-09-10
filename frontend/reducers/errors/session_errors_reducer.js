import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../../actions/session_actions';

// keeps tracks of session-specific errors
export const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};