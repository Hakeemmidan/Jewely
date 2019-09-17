import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { 
  RECEIVE_USER,
  REMOVE_USER,
  RECEIVE_ALL_PRODUCTS } from '../../actions/user_actions';

export const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = Object.assign({}, oldState, {
        [action.currentUser.id]: action.currentUser 
      });
      return nextState;
    case RECEIVE_ALL_PRODUCTS:
      return action.users
    case RECEIVE_USER:
      nextState = Object.assign({}, oldState, {
        [action.user.id]: action.user
      })
      return nextState
    case REMOVE_USER:
      nextState = Object.assign({}, oldState)
      delete nextState.users[action.userId]
      return nextState
    default:
      return oldState;
  }
};