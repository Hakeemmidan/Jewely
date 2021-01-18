import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import {Carousel} from 'react-responsive-carousel';
import {ReviewsIndexContainer} from '../reviews/reviews_index_container';

export class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.imageShow = this.imageShow.bind(this);
    this.reRenderParent = this.reRenderParent.bind(this);
    this.calculateProductAverageRating = this.calculateProductAverageRating.bind(
      this
    );
    this.renderAverageStarRating = this.renderAverageStarRating.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId).then((action) =>
      this.setState({
        product: action.product,
      })
    );
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.productId !== this.props.match.params.productId
    ) {
      this.props.fetchProduct(this.props.match.params.productId);
    }
  }

  handleAddToCart() {
    const productId = this.props.match.params.productId;
    const quantity = $('.product-show-quantity-dropdown')[0].value;

    if (localStorage.cart) {
      // If there is already items in the cart, add on to them
      let cartProductIdsAndQuantities = JSON.parse(
        localStorage.getItem('cart')
      );
      cartProductIdsAndQuantities.push([productId, quantity]);
      localStorage.setItem('cart', JSON.stringify(cartProductIdsAndQuantities));
      this.props.fetchCartBadge();
    } else {
      // If not, then create the cart and add the targeted item and its quantity
      localStorage.setItem('cart', JSON.stringify([productId, quantity]));
      this.props.fetchCartBadge();
    }
  }

  renderSellerUsername() {
    const product = this.state.product;

    return (
      <div>
        <Link
          to={`/users/${product.seller_id}`}
          className="product-show-seller-username"
        >
          {product.seller_username}
        </Link>
      </div>
    );
  }

  imageShow() {
    const product = this.state.product;

    if (Array.isArray(product.photoUrls)) {
      return (
        <Carousel>
          {product.photoUrls.map((photoUrl, idx) => {
            return (
              <div
                className="product-show-imgs-container"
                key={`photo-${product.id}-${idx}-container`}
              >
                <img
                  alt="Review rating star"
                  key={`photo-${product.id}-${idx}`}
                  className="product-show-carousel-images"
                  src={photoUrl}
                />
              </div>
            );
          })}
        </Carousel>
      );
    } else if (typeof product.photoUrls === 'string') {
      return (
        <Carousel>
          <div key={`photo-${product.id}-single-photo-container`}>
            <img
              alt="product"
              key={`photo-${product.id}-single-photo`}
              src={product.photoUrls}
            />
          </div>
        </Carousel>
      );
    } else {
      return null;
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.product) {
      if (
        nextProps.product.reviews.length !== this.props.product.reviews.length
      ) {
        this.setState({
          product: nextProps.product,
        });
      }
    }
    return true;
  }

  reRenderParent() {
    this.props.fetchProduct(this.props.match.params.productId).then((action) =>
      this.setState({
        product: action.product,
      })
    );
  }

  calculateProductAverageRating() {
    let ratingsSum = 0;
    let ratingsCount = 0;
    this.state.product.reviews.forEach((review) => {
      ratingsSum += parseInt(review.rating);
      ratingsCount += 1;
    });

    return parseFloat(ratingsSum / ratingsCount).toFixed(2);
  }

  renderAverageStarRating() {
    const avgRatingInt = Math.round(this.calculateProductAverageRating());

    const stars = [];
    for (let i = 0; i < avgRatingInt; i++) {
      stars.push(
        <img
          alt="Review rating star (filled)"
          key={`avg-filledStar-${i}`}
          className="product-show-average-rating-star"
          src="https://image.flaticon.com/icons/svg/148/148841.svg"
        />
      );
    }

    for (let j = 0; j < 5 - avgRatingInt; j++) {
      stars.push(
        <img
          alt="Review rating star (unfilled)"
          key={`avg-unfilledStar-${j}`}
          className="product-show-average-rating-star"
          src="https://image.flaticon.com/icons/svg/149/149222.svg"
        />
      );
    }

    return (
      <div className="product-show-avg-rating-container">
        <div>{stars.map((star) => star)}</div>
        &nbsp;
        <div className="reviews-count">
          ({this.state.product.reviews.length})
        </div>
      </div>
    );
  }

  populateQuantityDropDownOptions() {
    let dropDownOptions = [];
    for (let i = 1; i < 102; i++) {
      dropDownOptions.push(<option value={`${i}`}>{i}</option>);
    }

    return dropDownOptions.map((option) => {
      return option;
    });
  }

  render() {
    const product = this.state.product;

    if (!product) {
      return <div></div>;
    }

    const avgRating = this.calculateProductAverageRating();

    let editLink = null;
    if (this.props.currentUserId === product.seller_id) {
      editLink = (
        <Link
          className="text-link-underline-hover"
          to={`/products/${product.id}/edit`}
          style={{
            padding: '0',
            textDecoration: 'underline',
            color: 'rgb(74, 74, 74)',
          }}
        >
          Edit your product listing
        </Link>
      );
    }

    return (
      <div className="product-show-container">
        <div className="clearfix product-listing">
          <div className="listing-left-column">{this.imageShow()}</div>

          <div className="listing-right-column">
            {this.renderSellerUsername()}

            <h1 className="product-show-title">{product.title}</h1>

            <div>
              {this.state.product.reviews.length > 0
                ? this.renderAverageStarRating()
                : null}
            </div>

            <div>
              <span className="product-show-price">
                $
                {parseFloat(product.price)
                  .toFixed(2)
                  .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                {/* Number format source : https://stackoverflow.com/a/14428340/7974948 */}
              </span>
            </div>

            <div className="product-show-quantity-select">
              <label className="quantity-label">Quantity</label>

              <select className="product-show-quantity-dropdown">
                {this.populateQuantityDropDownOptions()}
              </select>
            </div>
            <div className="product-show-add-to-cart-container">
              <Link to="/cart">
                <button
                  className="product-show-add-to-cart-button"
                  onClick={this.handleAddToCart}
                >
                  <p className="product-show-add-to-cart-button-text">
                    Add to cart
                  </p>
                </button>
              </Link>
            </div>
            <br />
            {editLink}
          </div>
        </div>

        <hr className="product-show-divider" />

        <div className="product-show-lower">
          <div className="product-show-column1">
            <b>
              Reviews{' '}
              {product.reviews.length > 0 ? (
                `(${avgRating} average):`
              ) : (
                <div style={{display: 'inline', fontWeight: 'normal'}}>
                  :
                  <br />
                  <br />
                  None at the moment&nbsp;
                  <span role="img" aria-label="hatching chick">
                    🐣
                  </span>
                  <br />
                  Be the first to review!&nbsp;
                  <span role="img" aria-label="finger pointing down">
                    👇
                  </span>
                </div>
              )}
            </b>
            <ReviewsIndexContainer
              reRenderParent={this.reRenderParent}
              productId={product.id}
              currentUserId={this.props.currentUserId}
            />
          </div>

          <div className="product-show-column product-show-column2">
            <b>Details:</b>
            <p className="product-show-description">{product.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
