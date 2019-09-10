export const fetchProducts = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/products'
    })
}

export const fetchProduct = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/products/${id}`
    })
}

export const createProduct = (product) => {
    return $.ajax({
        method: 'POST',
        url: 'api/products',
        data: { product }
    })
}

export const updateProduct = (product) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/products/${product.id}`,
        data: { product }
    })
}

export const removeProduct = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/products/${id}`,
    })
}