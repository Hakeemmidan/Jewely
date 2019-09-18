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
        if (!this.props.cartLocalStorage) {
            return null 
        }
        return (
            <span className="cart-item-count-badge">
                {this.props.cartLocalStorage.length}
            </span>
        )
    }
}