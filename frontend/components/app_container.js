import {connect} from 'react-redux';
import {App} from './app';
import {fetchCategories} from '../actions/categories_actions';

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()),
});

export const AppContainer = connect(null, mapDispatchToProps)(App);
