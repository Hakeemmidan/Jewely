import {connect} from 'react-redux';

import {ReviewsIndex} from './reviews_index';
import {openModal} from '../../../actions/modal_actions';
import {fetchReviews, removeReview} from '../../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    productId: ownProps.productId,
    currentUserId: ownProps.currentUserId,
    reviews: Object.values(state.entities.products[ownProps.productId].reviews),
    reRenderParent: ownProps.reRenderParent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    fetchReviews: (productId) => dispatch(fetchReviews(productId)),
    removeReview: (id) => dispatch(removeReview(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsIndex);
