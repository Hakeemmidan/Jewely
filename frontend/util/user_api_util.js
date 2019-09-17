export const fetchUsers = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/users'
    })
}

export const fetchUser = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/users/${id}`
    })
}

export const removeUser = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/users/${id}`
    })
}