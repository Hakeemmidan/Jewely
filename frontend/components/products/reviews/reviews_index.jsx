import React from 'react'
import { Link } from 'react-router-dom';

export class ReviewsIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: []
        }
        this.renderReviewStarRating = this.renderReviewStarRating.bind(this)
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.productId).then(
            action => {
                this.setState({
                    reviews: action.reviews
                })
            }
        )
    }

    renderReviewStarRating(rating) {
        const stars = []
        for (let i = 0; i < rating; i++) {
            stars.push(
                <img
                    className="product-show-review-rating-star"
                    src="https://image.flaticon.com/icons/svg/148/148841.svg" />
            )
        }

        for (let j = 0; j < 5 - rating; j++) {
            stars.push(
                <img
                    className="product-show-review-rating-star"
                    src="https://image.flaticon.com/icons/svg/149/149222.svg" />
            )
        }

        return stars.map(star => star)
    }

    render() {
        const reviews = this.state.reviews
        return (
            <div>
                <ul className="product-show-reviews-ul">
                    {reviews.map(review => {
                        return (
                            <li className="product-show-review-li">
                                <div className="product-show-review-username-and-date-container">
                                    <Link
                                        to={`/users/${review.author_id}`}
                                        className="product-show-review-username">
                                        {review.author_username}
                                    </Link>
                                    &nbsp;
                                    &nbsp;
                                            <div>
                                        {new Date(review.created_at.slice(0, 10)).toDateString().slice(4)}
                                    </div>
                                    <br />
                                </div>

                                <div>
                                    {this.renderReviewStarRating(review.rating)}
                                </div>

                                <div>
                                    {review.body}
                                    <br />
                                </div>
                                <br />

                                {/* <Link to={`/reviews/${review.id}`}> */}
                                {/* <img
                                    className="review-edit-button"
                                    onClick={() => this.props.openModal('edit review')}
                                    src="https://image.flaticon.com/icons/svg/1159/1159876.svg" /> */}
                                {/* </Link> */}
                                { this.props.currentUserId === review.author_id  ? 
                                    <img
                                        className="review-delete-button"
                                        src="https://image.flaticon.com/icons/svg/216/216683.svg" /> :
                                    null
                                }
                            </li>
                        )
                    })}
                </ul>
                {
                    this.props.currentUserId ?
                        <button
                            className="product-show-write-review-button"
                            onClick={() => this.props.openModal('create review')}>
                            Write a review
                                    </button> :
                        <p className="product-show-write-review-signin-requirement">
                            Please &nbsp;
                            <Link
                                to="/login"
                                className="review-signin-requirement-links">
                                login
                            </Link>
                            &nbsp; or &nbsp;
                            <Link
                                to="/signup"
                                className="review-signin-requirement-links">
                                signup
                            </Link> to write a review
                        </p>
                }
            </div>
        )
    }
}