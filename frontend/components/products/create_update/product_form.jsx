import React from 'react';
import { withRouter } from 'react-router-dom';

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.product
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
            window.localStorage.setItem('productFormState', JSON.stringify(this.state))
            // ^^^ Note: save stuff on the window so when a user refreshes they don't go away
            // Task : Make this better by waiting for the async function setState to finish executing 
                // (sometimes the field dosen't update completely before because setState dosen't finish setting)
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
            .then(() => this.props.history.push(`/products/${this.props.product.id}`),
            () => this.props.history.push(`/products/${this.props.product.id}/edit`));
    }

    renderErrors() {
        let errors = [];
        errors = this.props.product.errors
        if (errors) {
            return (
                <ul className="errors-ul">
                    {this.props.product.errors.map((error, i) => (
                        <li key={`error-${i}`} className="error">
                            {error}
                        </li>
                    ))}
                </ul>
            );
        }
    }

    render() {
        return (
            <div>
                <h3>{this.props.formType}</h3>

                <br/>

                {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
                    <label>Title
                    <input
                            type="text"
                            value={this.state.title}
                            onChange={this.update('title')} />
                    </label>

                    <label>Description
                        <textarea
                            value={this.state.description}
                            onChange={this.update('description')} />
                    </label>

                    <label>Price
                        <input
                            type="number"
                            value={this.state.price}
                            onChange={this.update('price')} />
                    </label>

                    <input type="submit" value={this.props.formType} />
                </form>
            </div>
        );
    }
}

export default withRouter(ProductForm);