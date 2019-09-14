import React from 'react';

export class CartShow extends React.Component {
    componentDidMount() {
        this.props.fetchCart(this.props.match.params.cartId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.cartId != this.props.match.params.cartId) {
            this.props.fetchCart(this.props.match.params.cartId)
        }
    }

    render() {
        return (
            <div>I am the cart!!!!!!</div>
        )
    }
}