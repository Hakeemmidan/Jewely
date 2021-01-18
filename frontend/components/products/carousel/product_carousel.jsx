import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import {Link} from 'react-router-dom';
import {ProductsCarouselItem} from './product_carousel_item';

export class ProductsCarousel extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <ScrollMenu
        wheel={false}
        arrowLeft={<div className="scroll-menu-arrow">{' < '}</div>}
        arrowRight={<div className="scroll-menu-arrow">{' > '}</div>}
        data={this.props.products.map((product, idx) => (
          <Link
            key={`products-carousel-item-link-${idx}`}
            to={`/products/${product.id}`}
            style={{textDecoration: 'none'}}
          >
            <ProductsCarouselItem
              key={`products-carousel-item-idx-${idx}`}
              product={product}
            />
          </Link>
        ))}
      />
    );
  }
}
