import {connect} from 'react-redux';
import {CategoriesCarousel} from './categories_carousel';

const mapStateToProps = ({entities: {categories}}) => {
  return {
    categories,
  };
};

export const CategoriesCarouselContainer = connect(
  mapStateToProps,
  null
)(CategoriesCarousel);
