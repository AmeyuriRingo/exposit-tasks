import {compose, createStore, applyMiddleware} from 'redux'
import {initialState, rootReducer} from './reducers/rootReducer'
import thunk from "redux-thunk";

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(
        thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store