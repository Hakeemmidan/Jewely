import React from 'react';


export class NavbarCartBadge extends React.Component {
    render() {
        return (
            <span className="cart-item-count-badge">
                {JSON.parse(localStorage.cart).length}
            </span>
        )
    }
}