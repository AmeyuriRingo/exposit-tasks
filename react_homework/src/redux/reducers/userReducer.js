import {CREATE_USER, FETCH_USERS, EDIT_USERS} from "../types";

const initialState ={
    users: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {...state, users: state.users.concat(action.payload)}
        case FETCH_USERS:
            return {...state, users: action.payload}
        case EDIT_USERS:
            return {...state, users: action.payload}
        default: return state
    }
}