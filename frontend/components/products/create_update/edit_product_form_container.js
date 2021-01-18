import React from 'react';
import {connect} from 'react-redux';
import {ProductFormWithRouter} from './product_form';
import {
  fetchProduct,
  updateProduct,
  removeProduct,
} from '../../../actions/product_actions';
import {openModal, closeModal} from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const defaultProduct = {
    title: '',
    description: '',
    price: 0,
    photoUrls: [],
    seller_id: state.session.id,
  };

  const product =
    state.entities.products[ownProps.match.params.productId] || defaultProduct;
  product['errors'] = state.errors.product;

  const formType = 'Update Product';

  return {
    product,
    formType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    removeProduct: (id) => dispatch(removeProduct(id)),
    action: (formData) => dispatch(updateProduct(formData)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
  };
};

class EditProductForm extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product.id !== this.props.match.params.productId) {
      this.props.fetchProduct(this.props.match.params.productId);
    }
  }

  render() {
    const {action, formType, product, errors} = this.props;
    return (
      <ProductFormWithRouter
        action={action}
        formType={formType}
        product={product}
        openModal={this.props.openModal}
        closeModal={this.props.closeModal}
        removeProduct={this.props.removeProduct}
        errors={errors}
      />
    );
  }
}

export const EditProductFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProductForm);
