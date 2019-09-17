export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';
import * as UserAPIUtil from '../util/user_api_util';


const receiveUser = (user) => {
    return {
        type: RECEIVE_USER,
        user
    }
}

const deleteUser = (userId) => {
    return {
        type: REMOVE_USER,
        userId
    }
}

// Action creators ^^^
////////////////////////////////////////////
// Thunk action creators vvv

export const fetchUser = (id) => dispatch => {
    return UserAPIUtil.fetchUser(id)
        .then(user => dispatch(receiveUser(user)))
}

export const removeUser = (userId) => dispatch => {
    return UserAPIUtil.removeUser(userId)
        .then( () => dispatch(deleteUser(userId)))
}