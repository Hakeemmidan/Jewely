import React from 'react';
import { ProductIndexItem } from '../../products/index/product_index_item';

export class CartShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cartProducts: []
        }
    }

    componentDidMount() {
        // this.props.fetchCart(this.props.match.params.cartId)
        JSON.parse(localStorage.cart).map( productId => (
            this.props.fetchProduct(productId)
                .then(response => this.setState(state => {
                    const cartProducts = state.cartProducts.concat(response.product)
                    return {
                        cartProducts
                    }
                })
        )))
    }

    render() {
        if (this.state.cartProducts.length < JSON.parse(localStorage.cart).length) {
            return (
                <div>
                    <div>Loading...</div>
                </div>
            )
        }

        const cartProductsLis = this.state.cartProducts.map( (product, idx) => {
            return (
                <li>
                    <ProductIndexItem
                        key={`cart-item-${idx}`}
                        product={product}
                    />
                </li>
            )
        })

        return (
            <ul>
                {cartProductsLis}
            </ul>
        )
    }
}