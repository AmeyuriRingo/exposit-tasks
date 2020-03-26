import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import App from './App'
import store from './redux/createStore'
import EditUserForm from "./components/forms/EditUserForm";
import history from './history/history'
import ShowUser from "./components/showUsers/ShowUser";


const Root = () => (
    <Provider store={store}>
        <Router history={history}>
            <Route exact path="/" component={App} />
            <Route path="/edit/:email" component={EditUserForm} />
            <Route path="/profile/:email" component={ShowUser} />
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root