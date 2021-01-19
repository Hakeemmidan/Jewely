import React from 'react';
import {Link} from 'react-router-dom';

export function UserShowItem(props) {
  const product = props.product;

  return (
    <li key={`product-${product.id}-user-show-li`}>
      <div>
        <div className="user-show-item-details">
          <div className="user-show-item-title-container">
            <div>
              <Link style={{color: 'black'}} to={`/products/${product.id}`}>
                <p className="user-show-item-title">{product.title}</p>
              </Link>
            </div>
          </div>

          <div className="user-show-item-price-container">
            <p className="user-show-item-price">
              $
              {parseFloat(product.price)
                .toFixed(2)
                .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
              {/* Number format source : https://stackoverflow.com/a/14428340/7974948  */}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
