import * as userUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users
})

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

export const fetchAllUsers = () => (dispatch) =>{
    return userUtil.fetchAllUsers()
        .then((users) => dispatch(receiveAllUsers(users)));
} 

