export const fetchReviews = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/products/:product_id/reviews'
    })
}

export const createReview = (formData) => {
    return $.ajax({
        method: 'POST',
        url: 'api/products/:product_id/reviews',
        data: formData
    })
}

export const updateReview = (formData) => {
    const reviewId = parseInt(Array.from(formData.entries())[0][1])
    // TODO : Find product id and include it in the url
    // We need to find the product id here

    return $.ajax({
        method: 'PATCH',
        url: `api/products/:product_id/reviews/${reviewId}`,
        data: formData
    })
}

export const removeReview = (id) => {
    // TODO : Find product id and include it in the url
    return $.ajax({
        method: 'DELETE',
        url: `api/products/:product_id/reviews/${id}`
    })
}