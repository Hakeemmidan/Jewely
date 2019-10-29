import React from 'react';
import { ProductIndexItem } from './product_index_item';


export class ProductIndex extends React.Component {

    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        return (
            <div>
                <h2 className="product_index_catchphrase">
                    If it's shiny, custom, or fancy, it's on Jewely
                </h2>
                <div className="product-index-home-image-container">
                    <img
                        className="product-index-home-image" 
                        src="https://images.unsplash.com/photo-1508801283163-8e6e3090b523?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80">
                    </img>
                    <div className="product-index-home-image-text">
                        Jewelry shines brighter <br/> when it's custom
                    </div>
                </div>

                <div className="product-index-item-list-container">
                    {/* <Carousel className="product-index-photo-carousel"/> */}
                    <div className="product-index-list">
                        {this.props.products.map((product, idx) =>
                            <ProductIndexItem
                                key={idx}
                                product={product}
                            />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}