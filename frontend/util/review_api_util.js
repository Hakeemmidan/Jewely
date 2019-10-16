export const createReview = (review) => {
    debugger
    return $.ajax({
        method: 'POST',
        url: `api/reviews`,
        data: { review } // This is the format that rails is expecting object to be
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