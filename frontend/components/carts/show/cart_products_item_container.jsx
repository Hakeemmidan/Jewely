import { connect } from 'react-redux';

import { fetchCartShow } from '../../../actions/cart_actions';
import { CartProductsItem } from './cart_products_item';

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCartShow: () => dispatch(fetchCartShow()),
    }
}

export default connect(
    null,
    mapDispatchToProps
    )(CartProductsItem)