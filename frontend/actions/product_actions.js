export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS'
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const RECEIVE_PRODUCT_ERRORS = 'RECEIVE_PRODUCT_ERRORS';
import * as ProductAPIUtil from '../util/product_api_util';
import { convertArrayOfObjectsToObject } from '../app_helper_methods';


const receiveProducts = (products) => {
    return {
        type: RECEIVE_ALL_PRODUCTS,
        products: convertArrayOfObjectsToObject(products)
    }
}

const receiveProduct = (product) => {
    return {
        type: RECEIVE_PRODUCT,
        product
    }
}

const deleteProduct = (productId) => {
    return {
        type: REMOVE_PRODUCT,
        productId
    }
}

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_PRODUCT_ERRORS,
        errors
    }
}

// Action creators ^^^
////////////////////////////////////////////
// Thunk action creators vvv

export const fetchProducts = (filters) => dispatch => {
    return ProductAPIUtil.fetchProducts(filters)
            .then(products => dispatch(receiveProducts(products)))
}

export const fetchProduct = (id) => dispatch => {
    return ProductAPIUtil.fetchProduct(id)
            .then(product => dispatch(receiveProduct(product)))
}

export const createProduct = (formData) => dispatch => {
    return ProductAPIUtil.createProduct(formData)
            .then(product => dispatch(receiveProduct(product)),
                errs => dispatch(receiveErrors(errs.responseJSON)))
}

export const updateProduct = (formData) => dispatch => {
    return ProductAPIUtil.updateProduct(formData)
            .then(product => dispatch(receiveProduct(product)),
            errs => dispatch(receiveErrors(errs.responseJSON)))
            // Task : ^^^ errrs is undefined for update even when there should be an error
}

export const removeProduct = (productId) => dispatch => {
    return ProductAPIUtil.removeProduct(productId)
        .then(() => dispatch(deleteProduct(productId)),
            errs => dispatch(receiveErrors(errs.responseJSON)))
            // Noted: Make sure to have responseJSON on your error thunk action resposne 
}