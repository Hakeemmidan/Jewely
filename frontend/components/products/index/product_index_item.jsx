import React from 'react';
import { Link } from 'react-router-dom';

export class ProductIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const product = this.props.product
        return (
            <div key={this.props.product.id} className="product-index-item">
                <Link 
                    to={`/products/${product.id}`}
                    style={{textDecoration: 'none'}}
                    > 
                    <img src={product.photoUrls[0]} className="product-index-image"
                         alt={product.title} 
                         title={product.title}/>
                         {/* Noted: I have a title tag for the image because CHrome and Firefox don't support alt for hover */}
                    <p className="product-index-item-title">{product.title}</p>
                    <p className="product-index-item-seller-username">{this.props.product.seller_username}</p>
                    <p className="product-index-item-price">${parseFloat(product.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                    {/* Number format source : https://stackoverflow.com/a/14428340/7974948  */}
                </Link>
    
                {/* <Link to={`/products/${product.id}/edit`} removeProduct={props.removeProduct}>
                    Edit
                </Link> */}
                {/* Task: Make this only visible to logged in people */}
                {/* Task: Make a delete button avilable on the edit form of a specific product
                    Not sure if passing the removeProduct function as a prop might be the best
                    thing to do here. Not sure if it works too */}
            </div>
        )
    }
};