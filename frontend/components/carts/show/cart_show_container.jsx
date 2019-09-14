import { connect } from 'react-redux';

import { fetchCart } from '../../../actions/cart_actions';
import { CartShow } from './cart_show';
import { fetchProduct } from '../../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
    // question ) What are ownProps and where do they come from?
    return {
        cart: state.entities.carts[ownProps.match.params.cartId],
        cartId : ownProps.match.params.cartId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCart: (id) => dispatch(fetchCart(id)),
        fetchProduct: (id) => dispatch(fetchProduct(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (CartShow)