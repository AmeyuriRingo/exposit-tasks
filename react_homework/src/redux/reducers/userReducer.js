import {CREATE_USER, FETCH_USERS, CREATE_SEARCHED_USERS, EDIT_USERS, CREATE_SEARCH_TEXT} from "../types";

const initialState ={
    users: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {...state, users: state.users.concat(action.payload)}
        case FETCH_USERS:
            return {...state, users: action.payload}
        case CREATE_SEARCHED_USERS:
            return {...state, searchedUsers: action.payload}
        case EDIT_USERS:
            return {...state, users: action.payload}
        case CREATE_SEARCH_TEXT:
            return {...state, searchText: action.payload}
        default: return state
    }
}