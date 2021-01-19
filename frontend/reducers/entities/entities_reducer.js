import {combineReducers} from 'redux';
import {usersReducer} from './users_reducer';
import {productsReducer} from './products_reducer';
import {cartsReducer} from './carts_reducer';
import {reviewsReducer} from './reviews_reducer';
import {categoriesReducer} from './categories_reducer';

export const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  carts: cartsReducer,
  reviews: reviewsReducer,
  categories: categoriesReducer,
});
