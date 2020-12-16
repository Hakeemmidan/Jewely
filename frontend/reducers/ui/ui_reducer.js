import {combineReducers} from 'redux';
import {modalReducer} from './modal_reducer';
import {filtersReducer} from './filters_reducer';
import {drawerReducer} from './drawer_reducer';

export default combineReducers({
  modal: modalReducer,
  filters: filtersReducer,
  drawer: drawerReducer,
});
