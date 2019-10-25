import React from 'react';
import { Link } from 'react-router-dom';


export class CartProductsItem extends React.Component {
    constructor(props) {
        super(props)
        this.initiateTotalPriceChange = this.initiateTotalPriceChange.bind(this)
        this.state = {
            change: 0
        }
    }

    componentDidMount() {
        this.setState({
            product: this.props.product
        })
    }

    handleRemove(productId) {
        const that = this
        return () => {
            let cart = JSON.parse(localStorage.getItem('cart'))
            // NB : The cart is composed of id and quantity pairings.
            
            let unwantedIdx; 
            for (let i = 0; i < cart.length; i++) {
                if (parseInt(cart[i][0]) === productId) {
                    unwantedIdx = i
                    break
                }
            }
            // This is basically deleting the item that we are trying to remove 
            cart.splice(unwantedIdx, 1)
            localStorage.setItem('cart', JSON.stringify(cart))

            that.setState({
                product: null
            })
            
            that.props.updatePriceTotal()
        }
    }

    // ---------------------- Detecting quantity change from localStorage START ----------------------
    
    initiateTotalPriceChange(e) {
        // 1 change the local storage cart
        // 2 save it (set it)
        // 3 initiate a re-render of cart show

        const cart = JSON.parse(localStorage.getItem('cart'))

        cart.forEach( (idAndQuantity, idx) => {
            if (parseInt(this.props.product.id) === parseInt(idAndQuantity[0])) {
                cart[idx] = [this.props.product.id, e.currentTarget.value]
            }
        })

        localStorage.setItem('cart', JSON.stringify(cart))
        this.props.updatePriceTotal()
    }

    populateQuantityDropDownOptions() {
        let dropDownOptions = [];
        for (let i = 1; i < 14; i++) {
            if (i === this.props.product.quantity) {
                dropDownOptions.push(<option value={`${i}`} key={`quantity-option-${i}`} selected >{i}</option>)
            } else {
                dropDownOptions.push(<option value={`${i}`} key={`quantity-option-${i}`}>{i}</option>)
            }
        }

        return dropDownOptions.map( option => {
            return option
        })
    }



    render() {
        const product = this.state.product

        if (!this.state.product) {
            return <div></div>
        }
        
        return (
            <div className="cart-products-item">
                
                <Link to={`/products/${product.id}`} >
                    <img src={product.photoUrls[0]} className="product-index-image" />
                </Link>
                
                <div className="cart-products-item-details">
                    <div className="cart-products-item-title-and-remove">
                        <div>
                            <Link className="cart-products-item-title-link" to={`/products/${product.id}`}>
                                <p className="cart-products-item-title">
                                    {product.title}
                                </p>
                            </Link>
                        </div>
                        
                        <div>
                            <a
                            onClick={this.handleRemove(product.id)}
                            className="text-link-underline-hover cart-products-item-remove">
                                Remove
                            </a>
                        </div>
                    </div>


                    <div className="cart-product-item-quantity-and-price">
                        <div>
                            
                            <select 
                                onChange={this.initiateTotalPriceChange}
                                className="cart-product-item-drop-down">
                                {this.populateQuantityDropDownOptions()}
                            </select>
                        </div>
        
                        <div>
                            <p className="cart-products-item-price">
                                ${parseFloat(product.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                                {/* Number format source : https://stackoverflow.com/a/14428340/7974948  */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}