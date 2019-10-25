import { connect } from 'react-redux'
import ReviewForm from './review_form'
import { createReview } from '../../../actions/review_actions'
import { closeModal } from '../../../actions/modal_actions';
import { fetchProduct } from '../../../actions/product_actions';

const mapStateToProps = (state) => {
    const errorsArr = state.errors.review
    const errors = errorsArr ? errorsArr : [];
    const review = {
        body: '',
        rating: 0,
        author_id: state.session.id,
        errors: errors
    }

    const formType = 'Create Review'
    return { review, formType }
}

const mapDispatchToProps = (dispatch) => {
    return {
        action: review => dispatch(createReview(review)),
        closeModal: () => dispatch(closeModal()),
        fetchProduct: (id) => dispatch(fetchProduct(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)