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
    const productId = parseInt(Array.from(formData.entries())[0][1])
    // Note : We do this to grab productId from formData array like object
    return $.ajax({
        method: 'PATCH',
        url: `api/products/${productId}`,
        data: formData,
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