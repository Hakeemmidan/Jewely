import React from 'react';
import {connect} from 'react-redux';
import {ReviewFormWithRouter} from './review_form';
import {
  fetchReview,
  updateReview,
  removeReview,
} from '../../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  const errorsArr = state.errors.review;
  const errors = errorsArr ? errorsArr : [];
  const defaultReview = {
    body: '',
    rating: 0,
    author_id: state.session.id,
    errors: errors,
  };

  const review =
    state.entities.reviews[ownProps.match.params.reviewId] || defaultReview;
  review['errors'] = state.errors.review;

  const formType = 'Update Review';

  return {
    review,
    formType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReview: (id) => dispatch(fetchReview(id)),
    removeReview: (id) => dispatch(removeReview(id)),
    action: (formData) => dispatch(updateReview(formData)),
  };
};

class EditReviewForm extends React.Component {
  componentDidMount() {
    this.props.fetchReview(this.props.match.params.reviewId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.review.id !== this.props.match.params.reviewId) {
      this.props.fetchReview(this.props.match.params.reviewId);
    }
  }

  render() {
    const {action, formType, review, errors} = this.props;
    return (
      <ReviewFormWithRouter
        action={action}
        formType={formType}
        review={review}
        removeReview={this.props.removeReview}
        errors={errors}
      />
    );
  }
}

export const EditReviewFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditReviewForm);
