import { combineReducers } from 'redux';
import { usersReducer } from './users_reducer';
import { productsReducer } from './products_reducer';

export const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productsReducer
});