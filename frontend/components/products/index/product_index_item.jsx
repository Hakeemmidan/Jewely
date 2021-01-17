import React from 'react';
import {Link} from 'react-router-dom';

export function ProductIndexItem(props) {
  const product = props.product;

  return (
    <div key={product.id} className="product-index-item">
      <Link to={`/products/${product.id}`} style={{textDecoration: 'none'}}>
        <img
          src={product.photoUrls[0]}
          className="product-index-image"
          alt={product.title}
          title={product.title}
        />
        <p className="product-index-item-title">{product.title}</p>
        <p className="product-index-item-seller-username">
          {product.seller_username}
        </p>
        <p className="product-index-item-price">
          $
          {parseFloat(product.price)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
        </p>
        {/* Number format source : https://stackoverflow.com/a/14428340/7974948  */}
      </Link>
    </div>
  );
}
