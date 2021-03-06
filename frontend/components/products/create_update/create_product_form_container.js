import {connect} from 'react-redux';
import {ProductFormWithRouter} from './product_form';
import {createProduct} from '../../../actions/product_actions';
import {openModal, closeModal} from '../../../actions/modal_actions';

const mapStateToProps = (state) => {
  const errorsArr = state.errors.product;
  const errors = errorsArr ? errorsArr : [];

  const product = {
    title: '',
    description: '',
    price: null,
    photoUrls: [],
    category_id: null,
    seller_id: state.session.id,
    errors: errors,
  };

  const formType = 'Create Product';

  return {
    product,
    formType,
    categories: state.entities.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (formData) => dispatch(createProduct(formData)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
  };
};

export const CreateProductFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductFormWithRouter);
