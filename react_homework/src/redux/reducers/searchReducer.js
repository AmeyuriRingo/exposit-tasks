import {CREATE_SEARCH_TEXT} from "../types";

const initialState ={
    searchText: []
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SEARCH_TEXT:
            return {...state, searchText: action.payload}
        default: return state
    }
}