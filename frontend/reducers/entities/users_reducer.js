import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_USER, REMOVE_USER } from '../../actions/user_actions';

export const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = Object.assign({}, oldState, {
        [action.currentUser.id]: action.currentUser 
      });
      return nextState;
    case RECEIVE_USER:
      nextState = Object.assign({}, oldState, {
        [action.user.id]: action.user
      })
      return nextState
    // case REMOVE_PRODUCT:
    //   nextState = Object.assign({}, oldState)
    //   delete nextState.user
    default:
      return oldState;
  }
};