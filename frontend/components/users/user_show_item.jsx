import React from 'react';
import {Link} from 'react-router-dom';

export class UserShowItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const product = this.props.product;

    return (
      <li>
        <div>
          {/* <Link to={`/products/${product.id}`} >
                        <img src={product.photoUrls[0]} className="product-index-image" />
                    </Link> */}

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
}
