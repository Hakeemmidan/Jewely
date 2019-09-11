import { connect } from 'react-redux';

import { fetchProduct } from '../../../actions/product_actions';
import { ProductShow } from './product_show';


const mapStateToProps = (state, ownProps) => {
    return {
        product: state.entities.products[ownProps.match.params.productId]
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