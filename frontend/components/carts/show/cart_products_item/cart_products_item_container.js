import {connect} from 'react-redux';
import {CartProductsItem} from './cart_products_item';
import {fetchCartBadge} from '../../../../actions/cart_actions';

const mapStateToProps = (_, ownProps) => {
  return {
    product: ownProps.product,
    updatePriceTotal: ownProps.updatePriceTotal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCartBadge: () => dispatch(fetchCartBadge()),
  };
};

export const CartProductsItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartProductsItem);
