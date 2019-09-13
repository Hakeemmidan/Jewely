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

export const createProduct = (formData) => {
    return $.ajax({
        method: 'POST',
        url: 'api/products',
        data: formData,
        contentType: false,
        processData: false
    })
}

export const updateProduct = (formData) => {
    // question ) How do I grab the product id from here 
    return $.ajax({
        method: 'PATCH',
        url: `api/products/${product.id}`,
        data: {formData},
        contentType: false,
        processData: false
    })
}

export const removeProduct = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/products/${id}`,
    })
}