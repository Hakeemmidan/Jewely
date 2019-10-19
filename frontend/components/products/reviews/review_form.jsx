import React from 'react'

export class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = Object.assign( {}, this.props.review, {
            filledStarImg: <img
                className="rating-star filled"
                src="https://image.flaticon.com/icons/svg/148/148841.svg" />,
            unfilledStarImg: <img
                className="rating-star unfilled"
                src="https://image.flaticon.com/icons/svg/149/149222.svg" /> 
        })
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        // this.handleRemove = this.handleRemove.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        // Objective :
        // add event listener on stars to change them from unfilled 
            //to filled on hover
        const unfilledStarsArr = Array.from($('.rating-star.unfilled'));

        unfilledStarsArr.map(unfilledStar => {
            $(unfilledStar).hover(
                () => {
                    $(unfilledStar).attr('src', 'https://image.flaticon.com/icons/svg/148/148841.svg') 
                }, () => {
                    $(unfilledStar).attr('src', 'https://image.flaticon.com/icons/svg/149/149222.svg') 
                }
            )
        })
    }

    update(field) {
        return (e) => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.action(this.state)
            .then(() =>
                location.reload(true),
                (err) => {
                    console.log(err)
            })
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
                    <label>Title
                        <br />
                        <input 
                            type="text"
                            value={this.state.title}
                            onChange={this.update('title')}/>
                        <br />
                    </label>

                    <label>Body
                        <br />
                        <input
                            type="text"
                            value={this.state.body}
                            onChange={this.update('body')} />
                        <br />
                    </label>

                    <label>Rating
                        <br />
                        {/* <input
                            type="number"
                            value={this.state.rating}
                            onChange={this.update('rating')}/> */}
                        <div className="rating-stars">
                            {this.state.unfilledStarImg}
                            {this.state.unfilledStarImg}
                            {this.state.unfilledStarImg}
                            {this.state.unfilledStarImg}
                        </div>
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