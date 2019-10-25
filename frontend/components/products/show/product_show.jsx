import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from "react-responsive-carousel";
import ReviewsIndexContainer from '../reviews/reviews_index_container';


export class ProductShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleAddToCart = this.handleAddToCart.bind(this)
        this.imageShow = this.imageShow.bind(this)
        this.reRenderParent = this.reRenderParent.bind(this)
        this.calculateProductAverageRating = this.calculateProductAverageRating.bind(this)
        this.renderAverageStarRating = this.renderAverageStarRating.bind(this)
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId).then(action => this.setState({
            product: action.product
        }))
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
        const product = this.state.product

        return (
            <div>
                <Link
                    to={`/users/${product.seller_id}`}
                    className="product-show-seller-username">
                    {product.seller_username}
                </Link>
            </div>
        )
    }

    imageShow() {
        const product = this.state.product
        
        if (Array.isArray(product.photoUrls)) {
            return (
                <div>
                    <Carousel>
                        {product.photoUrls.map((photoUrl, idx) => {
                            return (
                                <div key={`photo-${product.id}-${idx}`}>
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

    reRenderParent() {
        this.props.fetchProduct(this.props.match.params.productId).then(action => this.setState({
            product: action.product
        }))
    }

    calculateProductAverageRating() {
        let ratingsSum = 0
        let ratingsCount = 0
        this.state.product.reviews.map(review => {
            ratingsSum += parseInt(review.rating)
            ratingsCount += 1
        })

        return parseFloat(ratingsSum / ratingsCount).toFixed(2)
    }

    renderAverageStarRating() {
        const avgRatingInt = Math.round(this.calculateProductAverageRating())

        const stars = []
        for (let i = 0; i < avgRatingInt; i++) {
            stars.push(
                <img
                    key={`filledStar-${i}`}
                    className="product-show-average-rating-star"
                    src="https://image.flaticon.com/icons/svg/148/148841.svg" />
            )
        }

        for (let j = 0; j < 5 - avgRatingInt; j++) {
            stars.push(
                <img
                    key={`unfilledStar-${j}`}
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
                    ({this.state.product.reviews.length})
                </div>
            </div>
        )
    }
    
    render() {
        const product = this.state.product
        
        if (!product) {
            return <div>Loading...</div>
        }

        const avgRating = this.calculateProductAverageRating()

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
                        {this.renderSellerUsername()}

                        <h1 className="product-show-title">
                            {product.title}
                        </h1>

                        <div>
                            {this.state.product.reviews.length > 0 ? this.renderAverageStarRating() : null}
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
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>

                            </select>
                        </div>
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
                        <b>
                            Details: 
                        </b>
                        <p className="product-show-description">
                            {product.description}
                        </p>
                    </div>

                    <div className="product-show-column2">
                        <b>
                            Reviews {avgRating > 0 ? `(${avgRating} average):` :
                                <div style={{display: 'inline', fontWeight: 'normal'}}>:
                                    <br/>
                                    <br/>
                                    None at the moment 🐣
                                    <br/> 
                                    Be the first to review!👇
                                </div>
                        
                        }
                        </b>
                        <ReviewsIndexContainer
                            reRenderParent={this.reRenderParent}
                            productId={product.id}
                            currentUserId={this.props.currentUserId}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
