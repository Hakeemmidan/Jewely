import { connect } from 'react-redux'
import ReviewForm from './review_form'
import { createReview } from '../../../actions/product_actions'

const mapStateToProps = (state) => {
    const errorsArr = state.errors.review
    const errors = errorsArr ? errorsArr : [];

    const review = {
        title: '',
        body: '',
        rating: 0,
        author_id: state.session.id,
        product_id: state.entities.products[0],
        errors: errors
    }
    
    const formType = 'Create Review'
    return { review, formType }
}

const mapDispatchToProps = (dispatch) => {
    return {
        action: formData => dispatch(createReview(formData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)