import { connect } from 'react-redux';


import { fetchCartBadge } from '../../../actions/cart_actions';
import { CartBadge } from './cart_badge';

const mapStateToProps = (state) => {
    return {
        cartLocalStorage: Object.values(state.entities.carts)[0]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCartBadge: () => dispatch(fetchCartBadge()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CartBadge)