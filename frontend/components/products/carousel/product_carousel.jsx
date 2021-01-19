import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import {ProductsCarouselItem} from './product_carousel_item';

export class ProductsCarousel extends React.Component {
  componentDidMount() {
    this.props.products || this.props.fetchProducts();
  }

  render() {
    const productItems = [];
    let product;

    for (let id in this.props.products) {
      product = this.props.products[id];

      productItems.push(
        <ProductsCarouselItem
          key={`products-carousel-item-idx-${id}`}
          product={product}
        />
      );
    }

    return (
      <ScrollMenu
        wheel={false}
        arrowLeft={<div className="scroll-menu-arrow">{' < '}</div>}
        arrowRight={<div className="scroll-menu-arrow">{' > '}</div>}
        data={productItems}
      />
    );
  }
}
