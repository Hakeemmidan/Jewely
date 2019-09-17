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

  // --------------- add to cart button START --------------- //

    // hasProductInCart() {
    //     const productId = this.props.match.params.productId 
    //     JSON.parse(localStorage.cart).includes(productId)
    // }
    // // question ) Why does this return undefiend here even though it returns true in console?

    // addToCartAgainButton() {
    //     return (
    //         <Link
    //             className="product-show-remove-from-cart-button"
    //             onClick={this.handleAddToCart}
    //             to="/cart">
    //             add from cart again (this product is already in your cart)
    //         </Link>
    //     )
    // }

    // addToCartButton() {
    //     return (
    //         <Link
    //             className="product-show-add-to-cart-button"
    //             onClick={this.handleAddToCart}
    //             to="/cart">
    //             Add to cart
    //         </Link>
    //     )
    // }

// --------------- add to cart button END --------------- //
    
    handleAddToCart() {
        const productId = this.props.match.params.productId 
        const quantity = $('.product-show-quantity-dropdown')[0].value

        if (localStorage.cart) {
            let cartProductIdsAndQuantities = JSON.parse(localStorage.getItem('cart'))
            cartProductIdsAndQuantities.push([productId, quantity])
            localStorage.setItem('cart', JSON.stringify(cartProductIdsAndQuantities))
            // Question ) I want to reload the page only before we go to the link. How is that possible?
            // question ) Is it possible to re-render a component from another component? 6
        } else { 
            localStorage.setItem('cart', JSON.stringify([productId, quantity]))
        }
            // window.setTimeout(
            //     location.reload(true), 5000
            // )
            location.hash = '#/cart';
        // question ) Why does this not work? ^^^^ 
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

                            {/* {this.hasProductInCart() ? this.addToCartAgainButton() : this.addToCartButton()} */}
                            {/* Task : ^^^ Get back to this after asking TA what is wrong with it */}
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
