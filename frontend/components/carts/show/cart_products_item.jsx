import React from 'react';
import { Link } from 'react-router-dom';


export class CartProductsItem extends React.Component {
    constructor(props) {
        super(props)
    }

    handleRemove(productId) {
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
            // NoteD : vvv This is basically deleting the item that we are trying to remove 
            cart.splice(unwantedIdx, 1)
            localStorage.setItem('cart', JSON.stringify(cart))
            // Note : vvv Having true here reloads the page without reloading the browser cache.
                    // We don't need to reload it because we have already changed it above.
                    // Not reloading it makes this refresh faster.
            location.reload(true);
            /* 
            Note : I have considered simply re-rendering the cart-show component 
                   rather than re-rendering the whole page. However that means that
                   you may need to pass a re-rendering function from the parent,
                   which can make a HUGE mess in the code.
                   Here's what you may need to do:
                   In parent:
                        1. Create a function that sets the state to anything using
                            dummy variable.
                        2. Bind that function to 'this' in the constructor.
                        3. Pass it on to the child as a prop
                  In child:
                        4. Invoke both the re-rendering function and the handleRemove
                           function (which actually removes items from localStorage).
                             4a. This means that you may to bundle both of them onto
                                  one function, which could cause some scope issues.
                  All this have made decide to simply refresh the page rather than
                  do all of that and probably make my code harder to read.
            */

        }
    }


    populateQuantityDropDownOptions() {
        let dropDownOptions = [];
        for (let i = 1; i < 6; i++) {
            if (i === this.props.product.quantity) {
                dropDownOptions.push(<option value={`${i}`} key={`quantity-option-${i}`} defaultValue>{i}</option>)
            } else {
                dropDownOptions.push(<option value={`${i}`} key={`quantity-option-${i}`}>{i}</option>)
            }
        }

        return dropDownOptions.map( option => {
            return option
        })
    }

    render() {
        const product = this.props.product
        return (
            <div className="cart-products-item">
                
                <Link to={`/products/${product.id}`} >
                    <img src={product.photoUrl} className="product-index-image" />
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
                        <a
                        onClick={this.handleRemove(product.id)}
                        className="text-link-underline-hover cart-products-item-remove">
                            Remove
                        </a>
                    </div>


                    <div className="cart-product-item-quantity-and-price">
                        <div>
                            <select className="cart-product-item-drop-down">
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