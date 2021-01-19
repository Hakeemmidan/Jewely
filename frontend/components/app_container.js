import {connect} from 'react-redux';
import {App} from './app';
import {fetchCategories} from '../actions/categories_actions';
import {fetchProducts} from '../actions/product_actions';

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()),
  fetchProducts: () => dispatch(fetchProducts()),
});

export const AppContainer = connect(null, mapDispatchToProps)(App);
