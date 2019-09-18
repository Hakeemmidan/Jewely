import React from 'react';
import { ProductIndexItem } from './product_index_item';

export class ProductIndex extends React.Component {

    componentDidMount() {
        this.props.fetchProducts()
    }
    render() {
        // var __html = require('./product_index_image_slideshow.jsx');
        // var template = { __html: __html };

        return (
            <div className="product-index-item-list-container">
                {/* <ProductsIndexSlideShow /> */}
                <div className="product-index-list">
                    {/* <div dangerouslySetInnerHTML={template} /> */}
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