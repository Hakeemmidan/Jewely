import React from 'react';
import { withRouter } from 'react-router-dom';

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.product
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
            window.localStorage.setItem('productFormState', JSON.stringify(this.state))
            // ^^^ Noted: save stuff on the window so when a user refreshes they don't go away
            // Task : Make this better by waiting for the async function setState to finish executing 
                // (sometimes the field dosen't update completely before because setState dosen't finish setting)
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        
        formData.append('product[productId]', this.state.id);
        formData.append('product[title]', this.state.title);
        formData.append('product[description]', this.state.description);
        formData.append('product[price]', this.state.price);
        formData.append('product[seller_id]', this.state.seller_id);
        formData.append('product[errors]', this.state.errors);

        if (this.state.photoFile) {
            formData.append('product[photo]', this.state.photoFile);
        }

        this.props.action(formData)
            .then(response => {
                console.log('Sucesss!')},
                err => {
                    console.log('Error!')
                    console.log(err)
                })
            // .then(() => this.props.history.push(`/products/${this.props.product.id}`),
            // () => this.props.history.push(`/products/${this.props.product.id}/edit`));
    }

    handleFile(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ photoUrl: reader.result, photoFile: file });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", photoFile: null });
        }
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

    renderRemoveProductButton() {
        return (
            <div>
                <br />
                <br />
                <br />
                <hr />
                <button onClick={this.handleRemove}>
                    Delete product listing
                </button>
            </div>
        )
    }

    handleRemove() {
        // remove it from cart (if it is there)
        const cart = JSON.parse(localStorage.getItem('cart'))
        for (let i = 0; i < cart.length; i++) {
            if (parseInt(cart[i][0]) === this.state.id) {
                cart.splice(i, 1)
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart))

        // remove it from database
        this.props.removeProduct(this.state.id)

        // change location to the main page
        location.hash = '#/'
    }

    render() {
        const preview = this.state.photoUrl ? <img height="100px" width="100px" src={this.state.photoUrl}/> : null
        return (
            <div>
                <h3>{this.props.formType}</h3>

                {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
                    <label>Title
                        <input
                                type="text"
                                value={this.state.title}
                                onChange={this.update('title')}/>
                    </label>

                    <br/>
                    <br/>
                    <hr />

                    <label>Description
                        <textarea
                            value={this.state.description}
                            onChange={this.update('description')} />
                    </label>

                    <br/>
                    <br/>
                    <hr />

                    <label>Price
                        <input
                            type="number"
                            value={this.state.price}
                            onChange={this.update('price')} />
                    </label>

                    <br/>
                    <br/>
                    <hr />

                    <label>Choose Image
                        <input 
                            type="file"
                            onChange={this.handleFile.bind(this)} />
                    </label>

                    <br/>
                    <br/>
                    <hr />

                    <label>ImagePreview
                        {preview}
                    </label>
                    
                    {this.props.removeProduct ? this.renderRemoveProductButton() : null}

                    <br/>
                    <br/>
                    <hr/>

                    <input type="submit" value={this.props.formType} />
                </form>
            </div>
        );
    }
}

export default withRouter(ProductForm);