import {CategoriesDrawer} from './categories_drawer';
import {connect} from 'react-redux';

const mapStateToProps = ({entities: {categories}}) => {
  return {
    categories,
  };
};

export const CategoriesDrawerContainer = connect(
  mapStateToProps,
  null
)(CategoriesDrawer);
