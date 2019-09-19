import React from 'react';
import { withRouter } from 'react-router-dom';

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.product
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.update = this.update.bind(this);
        this.previewImages = this.previewImages.bind(this);
    }

    update(field) {
        let that = this
        // Note : ^ Used to get access to this inside of the anonymous function
        return (e) => {
            that.setState({ [field]: e.target.value });
            window.localStorage.setItem('productFormState', JSON.stringify(that.state))
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


        debugger
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
        this.setState({ photoUrls: [], photoFiles: [] })
        // ^ Empty out the old photos (if there are any)

        const reader = new FileReader();
        const files = e.currentTarget.files;

        reader.onloadend = () => this.setState({ photoUrls: reader.result, photoFiles: files });

        debugger
        if (files) {
            for (let i = 0; i < files.length; i++) {
                reader.readAsDataURL(files[i]);
            }
        } else {
            this.setState({ photoUrls: null, photoFiles: null });
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

    previewImages() {
        if (this.state.photoUrls) {
            return (
                <ul className="product-form-image-preview-ul">
                    {this.state.photoUrls.map( photoUrl => {
                        return (
                        <label>
                            <br/>
                            <img
                                className="product-form-image-preview"
                                src={photoUrl} />
                        </label>
                        )
                    })}
                </ul>
            )
        } else {
            return null
        }
        // Question ) What is the deal with photoUrls? Why is it only showing one string even though I could have more than once image
    }

    render() {
        return (
            <div className="product-form-box-container">
                <div className="product-form-box">
                    <form 
                        className="product-form-content"
                        onSubmit={this.handleSubmit}>
                        <h2>{this.props.formType}</h2>
                        {this.renderErrors()}
                        <label className="product-form-label">Title
                            <br/>
                            <input
                                    className="product-form-oneline-input"
                                    type="text"
                                    value={this.state.title}
                                    onChange={this.update('title')}/>
                        </label>

                        <br/>
                        <hr />

                        <label className="product-form-label">Description
                            <br/>
                            <textarea
                                className="product-form-textarea-input"
                                rows="15" cols="50"
                                value={this.state.description}
                                onChange={this.update('description')} />
                        </label>

                        <br/>
                        <br/>
                        <hr />

                        <label className="product-form-label">Price
                            <br/>
                            <input
                                className="product-form-oneline-input"
                                type="number"
                                value={this.state.price}
                                onChange={this.update('price')} />
                        </label>

                        <br/>
                        <br/>
                        <hr />

                        <label className="product-form-label">Choose Image(s)
                            <br/>
                            <input 
                                type="file"
                                onChange={this.handleFile.bind(this)} 
                                
                                multiple/>
                        </label>

                        <br/>
                        <br/>
                        <hr />

                        <label className="product-form-label"> Image(s) Preview
                            <br/>
                            {this.previewImages()}
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