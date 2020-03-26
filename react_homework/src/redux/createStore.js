import {compose, createStore, applyMiddleware} from 'redux'
import {initialState, rootReducer} from './reducers/rootReducer'
import thunk from "redux-thunk";

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(
        thunk
    )
))

export default store