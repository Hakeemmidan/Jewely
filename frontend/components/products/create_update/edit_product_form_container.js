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
    price: null,
    photoUrls: [],
    category_id: null,
    seller_id: state.session.id,
  };

  const product =
    state.entities.products[ownProps.match.params.productId] || defaultProduct;
  product['errors'] = state.errors.product;

  const formType = 'Update Product';

  return {
    product,
    formType,
    categories: state.entities.categories,
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

  render() {
    const {action, formType, categories, product, errors} = this.props;

    return (
      <ProductFormWithRouter
        action={action}
        formType={formType}
        product={product}
        categories={categories}
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
