import React from 'react'
import { withRouter } from 'react-router-dom';

export class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.review
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        let that = this
        return (e) => {
            that.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();

        formData.append('review[reviewId]', this.state.id);
        formData.append('review[title]', this.state.title);
        formData.append('review[body]', this.state.body);
        formData.append('review[rating]', this.state.rating);
        formData.append('review[author_id]', this.state.author_id);
        formData.append('review[product_id]', this.state.product_id);
        formData.append('review[errors]', this.state.errors);

        this.props.action(formData)
            .then(() =>
                this.props.history.push(`/products/${this.state.product_id}`),
                (err) => {
                    console.log(err)
            })
    }


    renderErrors() {
        let errors = []
        errors = this.props.review.errors
        if (errors) {
            return (
                <ul className="errors-ul">
                    {this.props.review.errors.map((error, i) => (
                        <li key={`error-${i}`} className="error">
                            {error}
                        </li>
                    ))}
                </ul>
            );
        }
    }

    renderRemoveReviewButton() {
        return (
            <div>
                <button
                    onClick={this.handleRemove}>
                    Remove review
                </button>
            </div>
        )
    }

    handleRemove() {
        this.props.removeProduct(this.state.id)
    }

    render() {
        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}>
                    <label>Title
                        <br/>
                        <input 
                            type="text"
                            value={this.state.title}
                            onChange={this.update('title')}/>
                    </label>

                    <label>Rating
                        <br />
                        <input
                            type="integer"
                            value={this.state.rating}
                            onChange={this.update('rating')}/>
                    </label>

                    <label>Body
                        <br />
                        <input
                            type="text"
                            value={this.state.body}
                            onChange={this.update('body')}/>
                    </label>

                    <input
                        type="submit"
                        value={this.props.formType} />
                </form>
            </div>
        )
    }
}