import React from 'react';
import { CartProductsItem } from './cart_products_item';

export class CartShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cartProducts: [],
            priceTotal: 0
        }
    }

    componentDidMount() {
        let priceTotal = 0;
        JSON.parse(localStorage.cart).map( productIdAndQuantity => (
            productIdAndQuantity[0] === undefined ? null : this.props.fetchProduct(parseInt(productIdAndQuantity[0]))
                .then(response => this.setState(state => {
                    priceTotal += parseFloat(response.product.price)
                    const cartProducts = state.cartProducts.concat(response.product)
                    return {
                        cartProducts,
                        priceTotal
                    }
                }))
        ))
    }
    // ^^^ Inspired by : https://www.robinwieruch.de/react-state-array-add-update-remove 
                    // and https://hashnode.com/post/reactjs-how-to-render-components-only-after-successful-asynchronous-call-ciwvnkjr400sq7t533lvrpdtw 

    render() {
        if (JSON.parse(localStorage.cart).length === 0) {
            return (
                <div>Your cart is empty</div>
            )
        }
        if (this.state.cartProducts.length < JSON.parse(localStorage.cart).length) {
            return (
                <div>
                    <div>Loading...</div>
                </div>
            )
        }

        const cartProductsLis = this.state.cartProducts.map( (product, idx) => {
            return (
                <li key={`cart-item-${idx}`} className="cart-products-item-li">
                    <CartProductsItem
                        product={product}
                    />
                </li>
            )
        })

        return (
            <div className="cart-container">
                <ul className="cart-products-ul">
                    {cartProductsLis}
                </ul>
                <div>
                    <label>
                        Item(s) total: ${this.state.priceTotal}
                    </label>
                </div>
            </div>
        )
    }
}