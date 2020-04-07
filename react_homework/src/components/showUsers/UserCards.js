import React, {useEffect} from "react";
import {connect} from 'react-redux'
import User from "./User";
import {thunkFetchUserData} from "../../redux/reducers/thunkFetchUserData";

const UserCards = ({users, searchedUsers, loadUsers}) => {

    useEffect(() => {
        if (users.users.length === 0) {
            loadUsers()
        }

    }, [loadUsers])

    if (searchedUsers) {
        if (searchedUsers.length === 0) {
            return <User showUsers={false}/>
        } else {
            return searchedUsers.map(user => <User user={user} key={user.id}/>)
        }
    }
    return users.users.map(user => <User user={user} key={user.id}/>)
}

const mapStateToProps = state => {
    return {
        users: state.users,
        searchedUsers: state.users.users.filter(user => user.name.includes(state.searchBar.searchText))
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUsers: () => dispatch(thunkFetchUserData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCards)