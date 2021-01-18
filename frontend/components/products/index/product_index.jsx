import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import {Link} from 'react-router-dom';
import {ProductIndexItem} from './product_index_item';

export class ProductIndex extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div className="home-scroll-menu-container">
        <ScrollMenu
          wheel={false}
          arrowLeft={<div className="scroll-menu-arrow">{' < '}</div>}
          arrowRight={<div className="scroll-menu-arrow">{' > '}</div>}
          data={this.props.products.map((product, idx) => (
            <Link
              to={`/products/${product.id}`}
              style={{textDecoration: 'none'}}
            >
              <ProductIndexItem
                key={`product-index-item-idx-${idx}`}
                product={product}
              />
            </Link>
          ))}
        />
      </div>
    );
  }
}
