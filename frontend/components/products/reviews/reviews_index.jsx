import React from 'react';
import {Link} from 'react-router-dom';

export class ReviewsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {reviews: props.reviews};
    this.handleRemoveReview = this.handleRemoveReview.bind(this);
    this.renderReviewStarRating = this.renderReviewStarRating.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.reviews.length !== this.props.reviews.length) {
      this.setState({
        reviews: nextProps.reviews,
      });
    }
    return true;
  }

  renderReviewStarRating(rating, reviewId) {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <img
          alt="review stsr filled"
          key={`filledStar-index-${i}-${reviewId}`}
          className="product-show-review-rating-star"
          src="https://image.flaticon.com/icons/svg/148/148841.svg"
        />
      );
    }

    for (let j = 0; j < 5 - rating; j++) {
      stars.push(
        <img
          alt="review star unfilled"
          key={`unfilledStar-index-${j}-${reviewId}`}
          className="product-show-review-rating-star"
          src="https://image.flaticon.com/icons/svg/149/149222.svg"
        />
      );
    }

    return stars.map((star) => star);
  }

  handleRemoveReview(reviewId) {
    return () =>
      this.props.removeReview(reviewId).then((action) =>
        this.setState(
          {
            reviews: this.state.reviews.filter(
              (review) => review.id !== action.reviewId
            ),
          },
          this.props.reRenderParent
        )
      );
  }

  render() {
    let reviews = this.state.reviews;

    if (!reviews) {
      return <div></div>;
    }

    reviews = Object.values(reviews);

    return (
      <div>
        <ul className="product-show-reviews-ul">
          {reviews.map((review) => {
            return (
              <li
                key={`review-id-${review.id}`}
                className="product-show-review-li"
              >
                <div className="product-show-review-username-and-date-container">
                  <Link
                    to={`/users/${review.author_id}`}
                    className="product-show-review-username"
                  >
                    {review.author_username}
                  </Link>
                  &nbsp; &nbsp;
                  <div>
                    {new Date(review.created_at.slice(0, 10))
                      .toDateString()
                      .slice(4)}
                  </div>
                  <br />
                </div>

                <div>
                  {this.renderReviewStarRating(review.rating, review.id)}
                </div>

                <div className="review-body">
                  {review.body}
                  <br />
                </div>

                <hr className="product-show-divider reviews" />

                {this.props.currentUserId === review.author_id ? (
                  <img
                    alt="delete review icon/button"
                    className="review-delete-button"
                    onClick={this.handleRemoveReview(review.id)}
                    src="https://image.flaticon.com/icons/svg/216/216683.svg"
                  />
                ) : null}
              </li>
            );
          })}
        </ul>
        {this.props.currentUserId ? (
          <button
            className="product-show-write-review-button"
            onClick={() => this.props.openModal('create review')}
          >
            Write a review
          </button>
        ) : (
          <p className="product-show-write-review-signin-requirement">
            Please &nbsp;
            <Link to="/login" className="review-signin-requirement-links">
              login
            </Link>
            &nbsp; or &nbsp;
            <Link to="/signup" className="review-signin-requirement-links">
              signup
            </Link>{' '}
            to write a review
          </p>
        )}
      </div>
    );
  }
}
