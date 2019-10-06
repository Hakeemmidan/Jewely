import React from 'react'

export class ReviewsIndex extends Component {
    constructor(props) {
        super(props)

        this.renderReviews = this.renderReviews.bind(this)
    }

    componentDidMount() {
        this.props.fetchReviews()
    }

    renderReviews() {
        this.props.reviews.map(review => {
            <li>
                <h4>
                    {review.title}
                </h4>
                <p>
                    {review.body}
                </p>
                <p>
                    {review.rating}
                </p>
            </li>
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderReviews()}
                </ul>
            </div>
        )
    }
}
