import { connect } from 'react-redux'
import { ReviewForm } from './review_form'
import { createReview } from '../../../actions/review_actions'

const mapStateToProps = (state) => {
    const errorsArr = state.errors.review
    const errors = errorsArr ? errorsArr : [];
    const review = {
        title: '',
        body: '',
        rating: 0,
        author_id: state.session.id,
        product_id: Object.values(state.entities.products)[Object.values(state.entities.products).length - 1].id, 
        // The currently opened product is always last product in global state ^^^
        errors: errors
    }

    console.log(review.product_id)
    const formType = 'Create Review'
    return { review, formType }
}

const mapDispatchToProps = (dispatch) => {
    return {
        action: review => dispatch(createReview(review))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)