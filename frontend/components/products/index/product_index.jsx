import React from 'react';
import { ProductIndexItem } from './product_index_item';
// import Carousel from './Carousel';


export class ProductIndex extends React.Component {

    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        return (
            <div className="product-index-item-list-container">
                {/* <Carousel className="product-index-photo-carousel"/> */}
                <div className="product-index-list">
                    {this.props.products.map((product, idx) =>
                        <ProductIndexItem
                            key={idx}
                            product={product}
                            seller={this.props.seller}
                            fetchUser={this.props.fetchUser}
                        />
                    )}
                </div>
            </div>
        )
    }
}