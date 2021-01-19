import {CategoriesDrawer} from './categories_drawer';
import {closeDrawer} from '../../../actions/drawer_actions';
import {connect} from 'react-redux';

const mapStateToProps = ({entities: {categories}}) => {
  return {
    categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeDrawer: (direction) => dispatch(closeDrawer(direction)),
  };
};

export const CategoriesDrawerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesDrawer);
