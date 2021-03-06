// keep track of any error messages
// will combine all of our error handling reducers here

import {combineReducers} from 'redux';
import {sessionErrorsReducer} from './session_errors_reducer';
import {productErrorsReducer} from './product_errors_reducer';
import {reviewErrorsReducer} from './review_errors_reducer';

export const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  product: productErrorsReducer,
  review: reviewErrorsReducer,
});
