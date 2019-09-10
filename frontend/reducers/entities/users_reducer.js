import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';


export const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let nextState = Object.assign({}, oldState, {
        [action.currentUser.id]: action.currentUser 
      });
      return nextState;
    default:
      return oldState;
  }
};