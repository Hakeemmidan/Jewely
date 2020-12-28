import {connect} from 'react-redux';

import {ReviewsIndex} from './reviews_index';
import {openModal} from '../../../actions/modal_actions';
import {removeReview} from '../../../actions/review_actions';

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
    removeReview: (id) => dispatch(removeReview(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsIndex);
