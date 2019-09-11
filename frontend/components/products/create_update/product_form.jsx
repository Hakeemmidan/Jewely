import React from 'react';
import { withRouter } from 'react-router-dom';

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.product;
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then(() => this.props.history.push('/'));
    }

    renderErrors() {
        return (
            <ul className="errors-ul">
                {this.state.errors.map((error, i) => (
                    <li key={`error-${i}`} className="error">
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                {/* {this.renderErrors()} */}
                <h3>{this.props.formType}</h3>
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