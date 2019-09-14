import React from 'react';
import { Link } from 'react-router-dom';

export class ProductShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddToCart = this.handleAddToCart.bind(this)
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId)
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.productId != this.props.match.params.productId) {
            this.props.fetchProduct(this.props.match.params.productId)
        }
    }

    hasProductInCart() {
        const productId = this.props.match.params.productId 
        JSON.parse(localStorage.cart).includes(productId)
    }
    
    handleAddToCart() {
        // if (this.props.currentUserId) {
        //     // I am here 
        //     // I was thinking that I would save the cart entry here once the user adds to cart
        //     // So it would add it to the database at this point
        // }

        // Flow : 
            // CHeck if they have a cart
            // if they do, add more product ids to it
            // if not, then create a cart and then add the selected item to it
        const productId = this.props.match.params.productId 
        // If the local storage has a cart
        if (localStorage.cart) {
            // Then grab the cart product Ids array
            const cartProductIds = JSON.parse(localStorage.getItem('cart'))

            // if (cartProductIds.includes(productId)) {
            //     // Don't allow for the addition to cart more than once
            //     return
            // }

            // push the newly selected product id to it
            cartProductIds.push(productId)
            // set it back in the state
            localStorage.setItem('cart', JSON.stringify(cartProductIds))
        } else {
            // If not, thne just set a new local storage cart and the new product id to it
            localStorage.setItem('cart', JSON.stringify([productId]))
        }
        console.log(localStorage.getItem('cart'))
    }
    
    
    render() {
        const product = this.props.product
        if (!product) {
            return <div>Loading...</div>
        }

        let editLink = null;
        if (this.props.currentUserId === product.seller_id) { 
            editLink = <Link to={`/products/${product.id}/edit`}>Edit</Link>
        }
        
            return (
                <div>
                    <div className="clearfix">
                        <img src={`${product.photoUrl}`} className="product-show-image" alt="" />

                        <div className="listing-right-column">
                            <h1 className="product-show-title">
                                {product.title}
                            </h1>

                            <div>
                                <span className="product-show-price">
                                    ${parseFloat(product.price).toLocaleString('en')}
                                </span>
                            </div>
                            
                            <div className="product-show-quantity-select">
                                <label className="quantity-label">
                                    Quantity
                                </label>

                                <select className="product-show-quantity-dropdown">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>

                            <button 
                                className="product-show-add-to-cart-button"
                                onClick={this.handleAddToCart}>
                                Add to cart
                            </button>

                            <br/>

                            {editLink}
                        </div>
                    </div>

                    <br/>

                    <div className="product-show-lower">
                        <div className="product-show-column product-show-column1">
                            I am the first column
                        </div>

                        <div className="product-show-column product-show-column2">
                            <p className="product-show-description">
                                {product.description}
                            </p>
                        </div>

                        <div className="product-show-column product-show-column3">
                            some details
                        </div>
                    </div>
                </div>
            )
    }
}
