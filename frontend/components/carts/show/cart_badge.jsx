import React from 'react';
// import { fetchCartBadge } from '../../../actions/cart_actions';

export class CartBadge extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.fetchCartBadge()
    }

    render() {
        if (!this.props.cartLocalStorage || this.props.cartLocalStorage.length === 0) {
            return null 
        } else if (this.props.cartLocalStorage) {
            return (
                <div className="cart-item-count-badge">
                    {this.props.cartLocalStorage.length}
                </div>
            )
        }
    }
}