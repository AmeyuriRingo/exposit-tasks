import {CREATE_USER, FETCH_USERS, CREATE_SEARCHED_USERS, EDIT_USERS} from "../types";

export function createUser(user) {
    return {
        type: CREATE_USER,
        payload: user
    }
}

export function fetchUsers(users) {
    return {
        type: FETCH_USERS,
        payload: users
    }
}

export function createSearchedUser(users) {
    return {
        type: CREATE_SEARCHED_USERS,
        payload: users
    }
}

export function editUsers(user) {
    return{
        type: EDIT_USERS,
        payload: user
    }
}