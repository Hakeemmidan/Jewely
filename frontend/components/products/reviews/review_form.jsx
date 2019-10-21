import React from 'react'

export class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.review
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        // this.handleRemove = this.handleRemove.bind(this);
        this.update = this.update.bind(this);
        this.triggerAction = this.triggerAction.bind(this);
    }

    componentDidMount() {
        const unfilledStarsArr = Array.from($('.rating-star.unfilled'));

        unfilledStarsArr.map((unfilledStar, idx) => {
            $(unfilledStar).hover(
                () => {
                    unfilledStarsArr.slice(0, idx + 1).map( unfilledStar => {
                        $(unfilledStar).attr('src', 'https://image.flaticon.com/icons/svg/148/148841.svg') 
                    })
                }, () => {
                    unfilledStarsArr.forEach(unfilledStar => {
                        if ($(unfilledStar).is('.unfilled')) {
                            // remove filling
                            $(unfilledStar).attr('src', 'https://image.flaticon.com/icons/svg/149/149222.svg') 
                        }
                    })
                }
            )

            $(unfilledStar).click(
                () => {
                    unfilledStarsArr.slice(0, idx + 1).map(unfilledStar => {
                        $(unfilledStar).attr('src', 'https://image.flaticon.com/icons/svg/148/148841.svg')
                        $(unfilledStar).removeClass('unfilled').addClass('filled')
                    })
                    unfilledStarsArr.slice(idx + 1).map(unfilledStar => {
                        $(unfilledStar).attr('src', 'https://image.flaticon.com/icons/svg/149/149222.svg')
                        $(unfilledStar).removeClass('filled').addClass('unfilled')
                    })
                }
            )
        })



    }

    update(field) {
        return (e) => this.setState({ [field]: e.target.value });
    }

    triggerAction() {
        this.props.action(this.state)
            .then(() =>
                location.reload(true),
                (err) => {
                    console.log(err)
                })
    }

    handleSubmit(e) {
        e.preventDefault();

        const rating = Array.from($('.filled')).length

        this.setState({
            rating
        }, this.triggerAction)
    }


    // renderErrors() {
    //     let errors = []
    //     errors = this.props.review.errors
    //     if (errors) {
    //         return (
    //             <ul className="errors-ul">
    //                 {this.props.review.errors.map((error, i) => (
    //                     <li key={`error-${i}`} className="error">
    //                         {error}
    //                     </li>
    //                 ))}
    //             </ul>
    //         );
    //     }
    // }

    // renderRemoveReviewButton() {
    //     return (
    //         <div>
    //             <button
    //                 onClick={this.handleRemove}>
    //                 Remove review
    //             </button>
    //         </div>
    //     )
    // }

    // handleRemove() {
    //     this.props.removeReview(this.state.id)
    // }

    render() {
        return (
            <div className="review_form_div">
                <form
                    onSubmit={this.handleSubmit}>
                    <label>Rating
                        <br />
                        {/* <input
                            type="number"
                            value={this.state.rating}
                            onChange={this.update('rating')}/> */}
                        <div className="rating-stars">
                            <img
                                alt="1"
                                className="rating-star unfilled 1"
                                src="https://image.flaticon.com/icons/svg/149/149222.svg" />
                            <img
                                alt="2"
                                className="rating-star unfilled 2"
                                src="https://image.flaticon.com/icons/svg/149/149222.svg" />
                            <img
                                alt="3"
                                className="rating-star unfilled 3"
                                src="https://image.flaticon.com/icons/svg/149/149222.svg" />
                            <img
                                alt="4"
                                className="rating-star unfilled 4"
                                src="https://image.flaticon.com/icons/svg/149/149222.svg" />
                            <img
                                alt="5"
                                className="rating-star unfilled 5"
                                src="https://image.flaticon.com/icons/svg/149/149222.svg" />
                        </div>
                        <br />
                    </label>

                    <label>Body
                        <br />
                        <textarea
                            rows="10"
                            cols="50"
                            type="text"
                            value={this.state.body}
                            onChange={this.update('body')} />
                        <br />
                    </label>

                    <input
                        type="submit"
                        value={this.props.formType} />
                </form>
            </div>
        )
    }
}