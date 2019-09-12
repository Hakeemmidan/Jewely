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
        const formData = new FormData();

        formData.append('product[title]', this.state.title);
        formData.append('product[description]', this.state.description);
        formData.append('product[price]', this.state.price);
        formData.append('product[seller_id]', this.state.seller_id);
        formData.append('product[errors]', this.state.errors);

        if (this.state.photoUrl) {
            formData.append('product[photoUrl]', this.state.photoUrl);
        }
        debugger

        this.props.action(formData)
            .then(response => {
                console.log('Sucesss!')
                console.log(response)},
                err => {
                    console.log('Error!')
                    console.log(err)
                })
            // .then(() => this.props.history.push(`/products/${this.props.product.id}`),
            // () => this.props.history.push(`/products/${this.props.product.id}/edit`));
    }

    handleFile(e) {
        this.setState({photoUrl: e.currentTarget.files[0]})
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
                                onChange={this.update('title')}/>
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

                    <label>Image
                        <input 
                            type="file"
                            onChange={this.handleFile.bind(this)} />
                    </label>

                    <input type="submit" value={this.props.formType} />
                </form>
            </div>
        );
    }
}

export default withRouter(ProductForm);