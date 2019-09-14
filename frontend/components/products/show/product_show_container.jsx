import { connect } from 'react-redux';

import { fetchProduct } from '../../../actions/product_actions';
import { ProductShow } from './product_show';


const mapStateToProps = (state, ownProps) => {
    // Question : Why is the currentUser not being passed down here?
        // I passed down in app
        // side noted : It's avilable in state so you don't really need to pass it down
    return {
        product: state.entities.products[ownProps.match.params.productId],
        currentUserId: state.session.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: (id) => dispatch(fetchProduct(id))
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps)
    (ProductShow)