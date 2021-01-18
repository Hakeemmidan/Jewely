import {connect} from 'react-redux';
import {ProductsCarousel} from './product_carousel';
import {fetchProducts} from '../../../actions/product_actions';

const mapStateToProps = (state) => {
  return {
    products: Object.values(state.entities.products),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export const ProductsCarouselContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsCarousel);
