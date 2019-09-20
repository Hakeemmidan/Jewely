import React from 'react';
import { Link } from 'react-router-dom';

export class UserShowItem extends React.Component {

    constructor(props) {
        super(props)
        debugger
    }

    render() {
        const product = this.props.product

        return (
            <li>
                <div className="cart-products-item">

                    <Link to={`/products/${product.id}`} >
                        <img src={product.photoUrls[0]} className="product-index-image" />
                    </Link>

                    <div className="cart-products-item-details">
                        <div className="cart-products-item-title-and-remove">
                            <div>
                                <Link className="cart-products-item-title-link" to={`/products/${product.id}`}>
                                    <p className="cart-products-item-title">
                                        {product.title}
                                    </p>
                                </Link>
                            </div>
                        </div>


                        <div className="cart-product-item-quantity-and-price">
                            <div>
                                <p className="cart-products-item-price">
                                    ${parseFloat(product.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                                    {/* Number format source : https://stackoverflow.com/a/14428340/7974948  */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}