import {RECEIVE_UPDATE_FILTER} from '../../actions/filter_actions';

export const filtersReducer = (oldState = {search: ''}, action) => {
  Object.freeze(oldState);
  if (action.type === RECEIVE_UPDATE_FILTER) {
    const newFilter = {
      [action.filter]: action.value,
    };
    return Object.assign({}, oldState, newFilter);
  } else {
    return oldState;
  }
};
