import React from 'react';
import {Link} from 'react-router-dom';
import {CartProductsItemContainer} from './cart_products_item/cart_products_item_container';

import {
  VisaIcon,
  MasterCardIcon,
  AmericanExpressIcon,
  DiscoverIcon,
  PaypalIcon,
} from '../../SVGs/cart_icons';

export class CartShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProducts: [],
      priceTotal: 0,
    };

    this.updatePriceTotal = this.updatePriceTotal.bind(this);
  }

  updatePriceTotal() {
    this.combineProductsBasedOnQuantity();

    this.setState({
      cartProducts: [],
      priceTotal: 0,
    });

    JSON.parse(localStorage.cart).map((productIdAndQuantity) =>
      this.collectProductAndQuantity(productIdAndQuantity)
    );
  }

  componentDidMount() {
    this.combineProductsBasedOnQuantity();

    JSON.parse(localStorage.cart).map((productIdAndQuantity) =>
      this.collectProductAndQuantity(productIdAndQuantity)
    );
  }
  // ^^^ Inspired by : https://www.robinwieruch.de/react-state-array-add-update-remove
  // and https://hashnode.com/post/reactjs-how-to-render-components-only-after-successful-asynchronous-call-ciwvnkjr400sq7t533lvrpdtw

  collectProductAndQuantity(productIdAndQuantity) {
    if (productIdAndQuantity[0] === undefined) {
      return null;
    } else {
      this.props
        .fetchProduct(parseInt(productIdAndQuantity[0]))
        .then((response) =>
          this.setState((state) => {
            let priceTotal = this.state.priceTotal;
            const quantity = parseInt(productIdAndQuantity[1]);
            const product = response.product;

            product.quantity = quantity;
            // ^ Setting the quantity for each product in cart
            priceTotal += parseFloat(response.product.price) * quantity;
            const cartProducts = state.cartProducts.concat(product);
            return {
              cartProducts,
              priceTotal,
            };
          })
        );
    }
  }

  combineProductsBasedOnQuantity() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const obj = {};

    cart.forEach((idAndQuantity) => {
      if (obj[idAndQuantity[0]]) {
        obj[idAndQuantity[0]] += parseInt(idAndQuantity[1]);
      } else {
        obj[idAndQuantity[0]] = parseInt(idAndQuantity[1]);
      }
    });

    const newCart = [];

    for (let key in obj) {
      newCart.push([key, String(obj[key])]);
    }

    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  render() {
    if (JSON.parse(localStorage.cart).length === 0) {
      return (
        <div className="cart-is-empty-message-container">
          <div className="cart-is-empty-message-box">
            <div className="cart-is-empty-message">Your cart is empty</div>

            <div className="cart-is-empty-link-div">
              <Link to="/products" className="cart-is-empty-link">
                Find your next favorite piece of jewelry{' '}
              </Link>
            </div>
          </div>
        </div>
      );
    }

    if (this.state.cartProducts.length < JSON.parse(localStorage.cart).length) {
      return <div></div>;
    }

    const cartProductsLis = this.state.cartProducts.map((cartProduct, idx) => {
      return (
        <li key={`cart-item-${idx}`} className="cart-products-item-li">
          <CartProductsItemContainer
            updatePriceTotal={this.updatePriceTotal}
            product={cartProduct}
          />
        </li>
      );
    });

    return (
      <div className="cart-show-component">
        <div className="cart-show-header">
          <h3>{JSON.parse(localStorage.cart).length} item(s) in your cart</h3>
          <Link to="/" style={{textDecoration: 'none'}}>
            <button className="cart-show-keep-shopping-button">
              Keep shopping
            </button>
          </Link>
        </div>

        <div className="cart-content-container">
          <ul className="cart-products-ul-col">{cartProductsLis}</ul>

          <div className="cart-show-checkout-col">
            <div className="cart-show-payment-option">
              <input
                type="radio"
                name="checkout-payment"
                checked
                className="cart-show-radio-input"
              />
              <label>
                <VisaIcon className="checkout-payment-method-icon" />
                <MasterCardIcon className="checkout-payment-method-icon" />
                <AmericanExpressIcon className="checkout-payment-method-icon" />
                <DiscoverIcon className="checkout-payment-method-icon" />
              </label>
            </div>

            <div className="cart-show-payment-option">
              <input
                type="radio"
                name="checkout-payment"
                className="cart-show-radio-input"
              />
              <label>
                <PaypalIcon />
              </label>
            </div>

            <div className="cart-show-items-total">
              <div>Item(s) total</div>
              <div className="cart-show-items-total-price">
                $
                {this.state.priceTotal
                  .toFixed(2)
                  .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                {/* Number format source : https://stackoverflow.com/a/14428340/7974948  */}
              </div>
            </div>

            <button
              id="proceed-to-checkout-button"
              className="black-background-button"
              onClick={() => this.props.openModal('proceed to checkout')}
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    );
  }
}
