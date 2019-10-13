import { connect } from 'react-redux';

import { fetchProduct } from '../../../actions/product_actions';
import { fetchUser } from '../../../actions/user_actions';
import { fetchCartBadge } from '../../../actions/cart_actions';
import { ProductShow } from './product_show';
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    // Question : Why is the currentUser not being passed down here?
        // I passed down in app
        // side noted : It's avilable in state so you don't really need to pass it down
    return {
        product: state.entities.products[ownProps.match.params.productId],
        currentUserId: state.session.id,
        seller: Object.values(state.entities.users)[0]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: (id) => dispatch(fetchProduct(id)),
        fetchUser: (id) => dispatch(fetchUser(id)),
        fetchCartBadge: () => dispatch(fetchCartBadge()),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps)
    (ProductShow)