import React from 'react'
import { connect } from 'react-redux'
import { ReviewForm } from './review_form'
import { fetchReview, updateReview, removeReview } from '../../../actions/review_actions'


const mapStateToProps = (state, ownProps) => {
    const defaultReview = {
        title: '',
        body: '',
        rating: 0,
        author_id: state.session.id,
        product_id: Object.values(state.entities.products)[Object.values(state.entities.products).length - 1].id,
        // The currently opened product is always last product in global state ^^^
        errors: errors
    }
    const review = state.entities.reviews[ownProps.match.params.reviewId] || defaultReview
    review['errors'] = state.errors.review
    
    
    const formType = 'Update Review'

    return {
        review,
        formType
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchReview: id => dispatch(fetchReview(id)),
        removeReview: id => dispatch(removeReview(id)),
        action: formData => dispatch(updateReview(formData))
    }
}

class EditReviewForm extends React.Component {
    componentDidMount() {
        this.props.fetchReview(this.props.match.params.reviewId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.review.id != this.props.match.params.reviewId) {
            this.props.fetchReview(this.props.match.params.reviewId)
        }
    }

    render() {
        const { action, formType, review, errors } = this.props
        return (
            <ReviewForm
                action={action}
                formType={formType}
                review={review}
                removeReview={this.props.removeReview}
                errors={errors}
            />
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (EditReviewForm)