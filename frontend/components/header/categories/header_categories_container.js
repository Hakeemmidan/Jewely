import {connect} from 'react-redux';
import {HeaderCategories} from './header_categories';

const mapStateToProps = ({entities: {categories}}) => {
  return {
    categories,
  };
};

export const HeaderCategoriesContainer = connect(
  mapStateToProps,
  null
)(HeaderCategories);
