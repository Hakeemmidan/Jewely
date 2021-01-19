import * as CategoriesAPIUtil from '../util/categories_api_util';
export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';

const receiveProducts = (categories) => {
  return {
    type: RECEIVE_ALL_CATEGORIES,
    categories,
  };
};

// Action creators ^^^
////////////////////////////////////////////
// Thunk action creators vvv

export const fetchCategories = (filters) => (dispatch) => {
  return CategoriesAPIUtil.fetchCategories(filters).then((categories) =>
    dispatch(receiveProducts(categories))
  );
};
