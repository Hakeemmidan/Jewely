import React from 'react';
import { ProductIndexItem } from './product_index_item';
import { Carousel } from "react-responsive-carousel";


export class ProductIndex extends React.Component {

    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        debugger
        return (
            <div>
                <h2 className="product_index_catchphrase">
                    If it's shiny, custom, or fancy, it's on Jewely
                </h2>
                <div className="product_index_photo_carousel">
                    <Carousel 
                        autoPlay
                        infiniteLoop={true}
                        transitionTime={1500}
                        showThumbs={false}
                        interval={4000}
                        >

                        <div>
                            <img
                                className="product_index_photo_carousel_image"
                                src="https://cdn.pixabay.com/photo/2016/11/19/12/32/diamond-1839031_1280.jpg"
                            />
                        </div>
                        {/* Source : https://pixabay.com/photos/diamond-jewellery-jewelry-macro-1839031/ */}

                        <div>
                            <img
                                className="product_index_photo_carousel_image"
                                src="https://cdn.pixabay.com/photo/2015/05/26/09/48/chain-784422_1280.jpg"
                            />
                        </div>
                        {/* Source : https://pixabay.com/photos/chain-beads-jewellery-necklace-784422/ */}

                        <div>
                            <img
                                className="product_index_photo_carousel_image"
                                src="https://images.pexels.com/photos/298852/pexels-photo-298852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                />
                        </div>
                        {/* Source : https://www.pexels.com/photo/blur-close-up-elegant-flower-298852/ */}

                        <div>
                            <img
                                className="product_index_photo_carousel_image"
                                src="https://images.pexels.com/photos/1453008/pexels-photo-1453008.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            />
                        </div>
                        {/* Source : https://www.pexels.com/photo/black-and-gold-colored-analog-watch-with-leather-strap-1453008/ */}

                        <div>
                            <img
                                className="product_index_photo_carousel_image"
                                src="https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            />
                        </div>
                        {/* Source : https://www.pexels.com/photo/close-up-photography-of-blue-earrings-1413420// */}

                    </Carousel>
                </div>

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
            </div>
        )
    }
}