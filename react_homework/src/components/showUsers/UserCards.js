import React, {useEffect} from "react";
import {connect} from 'react-redux'
import User from "./User";
import {thunkFetchUserData} from "../../redux/reducers/thunkFetchUserData";

const UserCards = ({users, loadUsers}) => {

    useEffect(() => {
        if (users.users.length === 0) {
            loadUsers()
        }
    }, [loadUsers])


    if (users.searchedUsers) {
        if (users.searchedUsers.empty === true) {
            return <User showUsers={false}/>
        }
        if (users.users && users.searchedUsers.empty !== true) {
            if (users.searchedUsers) {
                return users.searchedUsers.map(user => <User user={user} key={user.id}/>)
            }
            return users.users.map(user => <User user={user} key={user.id}/>)
        }
    }
    return users.users.map(user => <User user={user} key={user.id}/>)
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUsers: () => dispatch(thunkFetchUserData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCards)