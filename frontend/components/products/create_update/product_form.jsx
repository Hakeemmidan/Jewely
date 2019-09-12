import React from 'react';
import { withRouter } from 'react-router-dom';

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.product
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
            // debugger
            // window.localStorage.setItem('productFormState', this.state)
            // ^^^ Note: save stuff on the window so when a user refreshes they don't go away
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
        // Task : I am not sure why the errors are not displaying for edit
        // Task : Figure how to get rid of errors when you re-render the page for 'create'
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