import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from "react-responsive-carousel";

export class ProductShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddToCart = this.handleAddToCart.bind(this)
        this.imageShow = this.imageShow.bind(this)
        this.renderReviews = this.renderReviews.bind(this)
        this.calculateProductAverageRating = this.calculateProductAverageRating.bind(this)
        this.renderAverageStarRating = this.renderAverageStarRating.bind(this)
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId)
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.productId != this.props.match.params.productId) {
            this.props.fetchProduct(this.props.match.params.productId)
        }
    }
    
    handleAddToCart() {
        const productId = this.props.match.params.productId 
        const quantity = $('.product-show-quantity-dropdown')[0].value

        if (localStorage.cart) {
            // IF there is already items in the cart, add on to them
            let cartProductIdsAndQuantities = JSON.parse(localStorage.getItem('cart'))
            cartProductIdsAndQuantities.push([productId, quantity])
            localStorage.setItem('cart', JSON.stringify(cartProductIdsAndQuantities))
            this.props.fetchCartBadge();
        } else { 
            // If not, then create the cart and add the targeted item and its quantity
            localStorage.setItem('cart', JSON.stringify([productId, quantity]))
            this.props.fetchCartBadge();
        }
    }
    
    renderSellerUsername() {
        const seller = this.props.seller
        return (
            <div>
                <Link
                    to={`/users/${seller.id}`}
                    className="product-show-seller-username">
                    {seller.username}
                </Link>
            </div>
        )
    }

    imageShow() {
        const product = this.props.product
        
        if (Array.isArray(product.photoUrls)) {
            return (
                <div>
                    <Carousel>
                        {product.photoUrls.map(photoUrl => {
                            return (
                                <div>
                                    <img
                                        src={photoUrl} />
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
            )
        } else if (typeof (product.photoUrls) === 'string') {
            return (
                <Carousel>
                    <div>
                        <img
                            src={photoUrl} />
                    </div>
                </Carousel>
            )
        } else {
            return null
        }
    }

    calculateProductAverageRating() {
        let ratingsSum = 0
        let ratingsCount = 0
        this.props.product.reviews.map(review => {
            ratingsSum += review.rating
            ratingsCount += 1
        })

        return parseFloat(ratingsSum / ratingsCount).toFixed(2)
    }

    renderAverageStarRating() {
        const avgRatingInt = parseInt(this.calculateProductAverageRating())

        const stars = []
        for (let i = 0; i < avgRatingInt; i++) {
            stars.push(
                <img
                    className="product-show-average-rating-star"
                    src="https://image.flaticon.com/icons/svg/148/148841.svg" />
            )
        }

        for (let j = 0; j < 5 - avgRatingInt; j++) {
            stars.push(
                <img
                    className="product-show-average-rating-star"
                    src="https://image.flaticon.com/icons/svg/149/149222.svg" />
            )
        }

        return (
            <div className="product-show-avg-rating-container">
                <div>
                    {stars.map(star => star)}
                </div>
                &nbsp;
                <div className="reviews-count">
                    ({this.props.product.reviews.length})
                </div>
            </div>
        )
    }

    renderReviewStarRating(rating) {
        const stars = []
        for (let i = 0; i < rating; i++) {
            stars.push(
                <img
                    className="product-show-review-rating-star"
                    src="https://image.flaticon.com/icons/svg/148/148841.svg" /> 
            )
        }
        
        for (let j = 0; j < 5 - rating; j++) {
            stars.push(
                <img
                    className="product-show-review-rating-star"
                    src="https://image.flaticon.com/icons/svg/149/149222.svg" /> 
            )
        }

        return stars.map(star => star)
    }

    renderReviews() {
        return (
            <ul>
                {this.props.product.reviews.map(review => {
                    return (
                        <li className="product-show-review-li">
                            <div className="product-show-review-username-and-date-container">
                                
                                <a
                                    href="#"
                                    className="product-show-review-username">
                                    {review.author_username}
                                </a>
                                &nbsp;
                                &nbsp;
                                <div>
                                    {new Date(review.created_at.slice(0, 10)).toDateString().slice(4)}
                                </div>
                                <br/>
                            </div>

                            <div>
                                {this.renderReviewStarRating(review.rating)}
                            </div>

                            <div>
                                {review.body}
                                <br/>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
    
    render() {
        const product = this.props.product

        if (!product) {
            return <div>Loading...</div>
        }

        let editLink = null;
        if (this.props.currentUserId === product.seller_id) { 
            editLink = <Link 
                className="text-link-underline-hover"
                to={`/products/${product.id}/edit`}
                style={{ padding: '0', textDecoration: 'underline', color: 'rgb(74, 74, 74)'}}>
                    Edit your product listing
            </Link>
        }

        return (
            <div>
                <div className="clearfix product-listing">
                    <div
                        className="product-show-images">
                        {this.imageShow()}
                    </div>


                    <div className="listing-right-column">
                        {this.props.seller ? this.renderSellerUsername() : null}

                        <h1 className="product-show-title">
                            {product.title}
                        </h1>

                        <div>
                            {this.props.product.reviews.length > 0 ? this.renderAverageStarRating() : null}
                        </div>

                        <div>
                            <span className="product-show-price">
                                ${parseFloat(product.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                                {/* Number format source : https://stackoverflow.com/a/14428340/7974948 */}
                            </span>
                        </div>
                        
                        <div className="product-show-quantity-select">
                            <label className="quantity-label">
                                Quantity
                            </label>

                            <select className="product-show-quantity-dropdown">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>

                        {/* {this.hasProductInCart() ? this.addToCartAgainButton() : this.addToCartButton()} */}
                        {/* Task : ^^^ Get back to this after asking TA what is wrong with it */}
                            <Link to='/cart'>
                                <button
                                    className="product-show-add-to-cart-button"
                                    onClick={this.handleAddToCart}>
                                    <p className="product-show-add-to-cart-button-text">
                                        Add to cart
                                    </p>
                                </button>
                            </Link> 
                        <br/>
                        {editLink}
                    </div>
                </div>

                <hr className="product-show-divider"/>

                <div className="product-show-lower">
                    <div className="product-show-column product-show-column1">
                        <p className="product-show-description-details-label">
                            Details:
                        </p> 
                        <p className="product-show-description">
                            {product.description}
                        </p>
                    </div>

                    <div className="product-show-column2">
                        {this.renderReviews()}
                        <button onClick={() => this.props.openModal('create review', this.props.product.id)}>
                            Write a review
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
