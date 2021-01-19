import {connect} from 'react-redux';
import {ProductsCarousel} from './product_carousel';

const mapStateToProps = (state) => {
  return {
    products: state.entities.products,
  };
};

export const ProductsCarouselContainer = connect(
  mapStateToProps,
  null
)(ProductsCarousel);
