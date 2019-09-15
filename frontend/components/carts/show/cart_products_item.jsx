import React from 'react';
import { Link } from 'react-router-dom';


export class CartProductsItem extends React.Component {
    constructor(props) {
        super(props)
    }

    handleRemove(productId) {
        return () => {
            let cartProductIdsAndQuantities = JSON.parse(localStorage.getItem('cart'))
            let unwantedIdx; 
            for (let i = 0; i < cartProductIdsAndQuantities.length; i++) {
                if (parseInt(cartProductIdsAndQuantities[i][0]) === productId) {
                    unwantedIdx = i
                    break
                }
            }
            // Note : vvv This is basically deleting the item that we are trying to remove 
            cartProductIdsAndQuantities.splice(unwantedIdx, 1)
            localStorage.setItem('cart', JSON.stringify(cartProductIdsAndQuantities))
            // question ) How do i re-render after the user clicks on this?
        }
    }



    render() {
        const product = this.props.product
        return (
            <div className="cart-products-item">
                <Link to={`/products/${product.id}`} >
                    <img src={product.photoUrl} className="product-index-image" />
                </Link>
                
                <a
                onClick={this.handleRemove(product.id)}
                className="text-link-underline-hover">
                    Remove
                </a>
    
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