import React from 'react';
import { Link } from 'react-router-dom';

import { CartProductsItem } from './cart_products_item';
import { 
        VisaIcon, 
        MasterCardIcon, 
        AmericanExpressIcon,
        DiscoverIcon,
        PaypalIcon } from '../../../util/cart_icons';

export class CartShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cartProducts: [],
            priceTotal: 0
        }
    }

    collectProductAndQuantity(productIdAndQuantity) {
        if (productIdAndQuantity[0] === undefined) {
            return null
        } else {
            this.props.fetchProduct(parseInt(productIdAndQuantity[0]))
                .then(response => this.setState((state) => {
                    let priceTotal = this.state.priceTotal
                    const quantity = parseInt(productIdAndQuantity[1])
                    const product = response.product


                    product.quantity = quantity
                    // ^ Setting the quantity for each product in cart
                    priceTotal += (parseFloat(response.product.price) * quantity)
                    const cartProducts = state.cartProducts.concat(product)
                    return {
                        cartProducts,
                        priceTotal
                    }
                }))
        } 
    }

    componentDidMount() {
        // Note : Local storage stores a pair of product ID and quantity for each item
        JSON.parse(localStorage.cart).map( productIdAndQuantity => (
            this.collectProductAndQuantity(productIdAndQuantity)
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

        const cartProductsLis = this.state.cartProducts.map( (cartProduct, idx) => {
            return (
                <li key={`cart-item-${idx}`} className="cart-products-item-li">
                    <CartProductsItem
                        product={cartProduct}
                    />
                </li>
            )
        })

        return (
            <div className="cart-show-component">
                <div className="cart-show-header">
                    <h3>{JSON.parse(localStorage.cart).length} items in your cart</h3>
                    <Link to="/" style={{ textDecoration: 'none'}}>
                        <button className="cart-show-keep-shopping-button">
                             Keep shopping 
                        </button>
                    </Link> 
                </div>
                
                <div className="cart-content-container">
                    <ul className="cart-products-ul-col">
                        {cartProductsLis}
                    </ul>
                    
                    <div className="cart-show-checkout-col">
                        <div>
                            <input type="radio" name="checkout-payment" checked className="cart-show-radio-input"/>
                            <label>
                                <VisaIcon/>
                                <MasterCardIcon/>
                                <AmericanExpressIcon/>
                                <DiscoverIcon/>
                            </label>
                        </div>

                        <div>
                            <input type="radio" name="checkout-payment" className="cart-show-radio-input"/>
                            <label>
                                <PaypalIcon/>
                            </label>
                        </div>

                        <div className="cart-show-items-total">
                            <div>
                                Item(s) total
                            </div>
                            <div>
                                ${this.state.priceTotal.toLocaleString('en')}
                            </div>
                        </div>

                        <button id="proceed-to-checkout-button" className="black-background-button">
                            Proceed to checkout
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}