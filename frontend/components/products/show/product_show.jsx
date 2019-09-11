import React from 'react';
import { Link } from 'react-router-dom';

export class ProductShow extends React.Component {
    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId)
    }
    
    componentDidUpdate(prevProps) {
        // Note: if the previous props don't match the current props,
        // then fetch the wanted product. Otherwise keep the same.
        if (prevProps.match.params.productId != this.props.match.params.productId) {
            this.props.fetchProduct(this.props.match.params.productId)
        }
    }

    render() {
        const product = this.props.product
        if (!product) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h3>{product.title}</h3>
                <h4>{product.description}</h4>
            </div>
        )
    }
}