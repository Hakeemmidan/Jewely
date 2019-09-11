import { connect } from 'react-redux';
import ProductForm from './product_form';
import { createProduct } from '../../../actions/product_actions';

const mapStateToProps = (state) => {
    debugger
    const product = { 
        title: '', 
        description: '',
        price: 0
    };
    const formType = 'Create Product';

    return { product, formType };
};

const mapDispatchToProps = (dispatch) => {
    return {
        action: post => dispatch(createProduct(post)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
