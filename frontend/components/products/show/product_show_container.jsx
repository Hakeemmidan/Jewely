import { connect } from 'react-redux';

import { fetchProduct } from '../../../actions/product_actions';
import { fetchUser } from '../../../actions/user_actions';
import { fetchCartBadge } from '../../../actions/cart_actions';
import { ProductShow } from './product_show';

const mapStateToProps = (state, ownProps) => {
    return {
        product: state.entities.products[ownProps.match.params.productId],
        currentUserId: state.session.id,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: (id) => dispatch(fetchProduct(id)),
        fetchUser: (id) => dispatch(fetchUser(id)),
        fetchCartBadge: () => dispatch(fetchCartBadge())
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps)
    (ProductShow)