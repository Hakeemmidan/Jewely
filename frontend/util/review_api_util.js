export const fetchReview = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/reviews/${id}`
    })
}

export const fetchReviews = (productId) => {
    return $.ajax({
        method: 'GET',
        url: `api/products/${productId}/reviews`
    })
}

export const createReview = (review) => {
    return $.ajax({
        method: 'POST',
        url: `api/reviews`,
        data: { review }
    })
}

export const updateReview = (formData) => {
    const reviewId = parseInt(Array.from(formData.entries())[0][1])
    return $.ajax({
        method: 'PATCH',
        url: `api/reviews/${reviewId}`,
        data: formData
    })
}

export const removeReview = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/reviews/${id}`
    })
}