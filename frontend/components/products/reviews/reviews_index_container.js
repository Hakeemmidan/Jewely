import { connect } from 'react-redux';

import { ReviewsIndex } from './reviews_index';
import { openModal } from '../../../actions/modal_actions';
import { fetchReviews } from '../../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        productId: ownProps.productId,
        currentUserId: ownProps.currentUserId,
        reviews: Object.values(state.entities.reviews)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: () => dispatch(openModal()),
        fetchReviews: (id) => dispatch(fetchReviews(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (ReviewsIndex)