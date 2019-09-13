import { connect } from 'react-redux';
import ProductForm from './product_form';
import { createProduct } from '../../../actions/product_actions';

const mapStateToProps = (state) => {
    const errorsArr = state.errors.product
    const errors = errorsArr ? errorsArr : [];
    
    const product = { 
        title: '', 
        description: '',
        price: 0,
        photoUrl: null,
        seller_id: state.session.id,
        errors: errors
    };

    const formType = 'Create Product';

    return { product, formType };
};

const mapDispatchToProps = (dispatch) => {
    return {
        action: formData => dispatch(createProduct(formData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
