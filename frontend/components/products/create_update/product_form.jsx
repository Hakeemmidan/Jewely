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


        if (this.state.photoFiles) {
            const photos = this.state.photoFiles
            for (let i = 0; i < photos.length; i++) {
                formData.append('product[photos][]', photos[i]);
            }
        }

        this.props.action(formData)
            .then(() => 
                this.props.history.push(`/`)
                // this.props.formType === 'Update Product' ?
                // this.props.history.push(`/products/${this.state.id}`)
                // : this.props.history.push(`/`)
                // question ) Why does clicking on the delete product button also click on the submit form button? 
                ,
                (err) => {
                    console.log(err)
                })
            // .then(() => this.props.history.push(`/products/${this.props.product.id}`),
            // () => this.props.history.push(`/products/${this.props.product.id}/edit`));
    }

    handleFile(e) {
        const event = e;

        this.setState({ photoUrls: [] }, () => {
            // ^ Empty out the old photos (if there are any)

            const reader = new FileReader();
            const files = event.currentTarget.files;

            reader.onloadend = () =>
                this.setState({ photoUrls: reader.result, photoFiles: files });

            if (files) {
                for (let i = 0; i < files.length; i++) {
                    reader.readAsDataURL(files[i]);
                }
            } else {
                this.setState({ photoUrls: null, photoFiles: null });
            }
        })
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
                <button
                    className="black-background-button"
                    id="product-form-delete-button"
                    onClick={this.handleRemove}>
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
        // Question ) What is the deal with photoUrls? Why is it only showing one string even though I could have more than once image
        const preview = this.state.photoUrls ? <img 
                                                height="100px"
                                                width="100px"
                                                className="product-form-image-preview"
                                                src={this.state.photoUrls}/>
                                            : null


        return (
            <div className="product-form-box-container">
                <div className="product-form-box">
                    <form onSubmit={this.handleSubmit}>
                        <h3>{this.props.formType}</h3>
                        {this.renderErrors()}
                        <label>Title
                            <br/>
                            <input
                                    type="text"
                                    value={this.state.title}
                                    onChange={this.update('title')}/>
                        </label>

                        <br/>
                        <br/>
                        <hr />

                        <label>Description
                            <br/>
                            <textarea
                                rows="15" cols="50"
                                value={this.state.description}
                                onChange={this.update('description')} />
                        </label>

                        <br/>
                        <br/>
                        <hr />

                        <label>Price
                            <br/>
                            <input
                                type="number"
                                value={this.state.price}
                                onChange={this.update('price')} />
                        </label>

                        <br/>
                        <br/>
                        <hr />

                        <label>Choose Image(s)
                            <br/>
                            <input 
                                type="file"
                                onChange={this.handleFile.bind(this)} 
                                
                                multiple/>
                        </label>

                        <br/>
                        <br/>
                        <hr />

                        <label> First Image Preview
                            <br/>
                            {preview}
                        </label>
                        
                        <br/>
                        <hr/>

                        <input 
                            className="black-background-button"
                            id="form-submit-button"
                            type="submit"
                            value={this.props.formType} />
                        {this.props.removeProduct ? this.renderRemoveProductButton() : null}
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(ProductForm);