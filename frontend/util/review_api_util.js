export const fetchReview = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/products/:product_id/reviews/${id}`
    })
}

export const fetchReviews = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/products/:product_id/reviews'
    })
}

export const createReview = (formData) => {
    const productId = parseInt(Array.from(formData.entries())[5][1])
    return $.ajax({
        method: 'POST',
        url: `api/products/${productId}/reviews`,
        data: formData
    })
}

export const updateReview = (formData) => {
    const reviewId = parseInt(Array.from(formData.entries())[0][1])
    const productId = parseInt(Array.from(formData.entries())[5][1])
    return $.ajax({
        method: 'PATCH',
        url: `api/products/${productId}/reviews/${reviewId}`,
        data: formData
    })
}

export const removeReview = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/products/${productId}/reviews/${id}`
    })
}