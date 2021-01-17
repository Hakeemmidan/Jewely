import {CategoriesDrawer} from './categories_drawer';
import {connect} from 'react-redux';

const mapStateToProps = ({entities: {categories}}) => {
  return {
    categories,
  };
};

export default connect(mapStateToProps, null)(CategoriesDrawer);
