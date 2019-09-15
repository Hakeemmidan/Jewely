import React from 'react';
import { Link } from 'react-router-dom';


export class CartProductsItem extends React.Component {
    constructor(props) {
        super(props)
    }

    handleRemove(productId) {
        // grab the cart local storage
        // parse it
        // remove prododuct from it
        // set the cart 
        // re render
        return () => {
            let cartProductIds = JSON.parse(localStorage.getItem('cart'))
            // cartProductIds = new Set(cartProductIds)
            // cartProductIds.delete(String(productId))
            const unwantedIdx = cartProductIds.indexOf(String(productId))
            cartProductIds = cartProductIds.slice(0, unwantedIdx).concat(cartProductIds.slice(unwantedIdx + 1))
            localStorage.setItem('cart', JSON.stringify(cartProductIds))
        }
    }

    render() {
        const product = this.props.product
        return (
            <div className="cart-products-item">
                <Link to={`/products/${product.id}`} >
                    <img src={product.photoUrl} className="product-index-image" />
                </Link>

                
                <button onClick={this.handleRemove(product.id)} value="Remove"/>
    
                <div className="cart-products-item-details">
                    <div className="cart-products-item-title">
                        <p>{product.title}</p>
                    </div>
    
                    <div className="cart-products-item-price">
                        <p>${parseFloat(product.price).toLocaleString('en')}</p>
                    </div>
                </div>
            </div>
        )
    }
}