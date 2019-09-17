import {connect} from 'react-redux'

import { ProductIndex } from './product_index';
import { fetchProducts } from '../../../actions/product_actions';
import { fetchUser } from '../../../actions/user_actions';

const mapStateToProps = (state) => {
    return {
        products: Object.values(state.entities.products),
        user: Object.values(state.entities.users)[0]
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        fetchUser: (id) => dispatch(fetchUser(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (ProductIndex)