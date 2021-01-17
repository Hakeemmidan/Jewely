import {connect} from 'react-redux';
import {fetchCategories} from '../../../actions/categories_actions';
import {HeaderCategories} from './header_categories';

const mapStateToProps = ({entities: {categories}}) => {
  return {
    categories: categories,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCategories);
