import React from 'react';
import { UserShowItem } from './user_show_item';


export class UserShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: this.props.user,
            products: this.props.user.products
        }

        this.populateUserProducts = this.populateUserProducts.bind(this)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.user.id)
    }


    populateUserProducts() {
        return (
        <ul>
            {this.state.products.map(product => {
                return <UserShowItem
                    product={product} />
            })}
        </ul>
        )
    }

    render() {
        return (
            <div>
                <h3>{this.state.user.username}</h3>
                <div>
                    Products that this user sells:
                    <br/>
                    {this.populateUserProducts()}
                </div>
            </div>
        )
    }
}