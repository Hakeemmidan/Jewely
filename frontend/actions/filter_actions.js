import { fetchProducts } from './product_actions'

export const RECEIVE_UPDATE_FILTER = 'RECEIVE_UPDATE_FILTER';

export const receiveFilter = (filter, value) => ({
    type: RECEIVE_UPDATE_FILTER,
    filter,
    value
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(receiveFilter(filter, value));
    return fetchProducts(getState().ui.filters)(dispatch);
};