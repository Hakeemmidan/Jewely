import {connect} from 'react-redux';
import {fetchCategories} from '../actions/categories_actions';
import {App} from './app';

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()),
});

export const AppContainer = connect(null, mapDispatchToProps)(App);
