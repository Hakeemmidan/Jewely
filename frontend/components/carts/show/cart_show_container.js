import {connect} from 'react-redux';
import {fetchCart} from '../../../actions/cart_actions';
import {fetchProduct} from '../../../actions/product_actions';
import {CartShow} from './cart_show';
import {openModal} from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.entities.carts[ownProps.match.params.cartId],
    cartId: ownProps.match.params.cartId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: (id) => dispatch(fetchCart(id)),
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export const CartShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartShow);
