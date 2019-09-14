import React from 'react';
import { Link } from 'react-router-dom';


export const CartProductsItem = (props) => {
    const product = props.product
    
    return (
        <div className="cart-products-item">
            <Link to={`/products/${product.id}`} >
                <img src={product.photoUrl} className="product-index-image" />
            </Link>

            

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