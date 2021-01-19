import {combineReducers} from 'redux';
import {modalReducer} from './modal_reducer';
import {filtersReducer} from './filters_reducer';
import {drawerReducer} from './drawer_reducer';

export const uiReducer = combineReducers({
  modal: modalReducer,
  filters: filtersReducer,
  drawer: drawerReducer,
});
