import React, {useEffect, useState} from "react";
import {connect} from 'react-redux'
import User from "./User";
import {thunkFetchUserData} from "../../redux/reducers/thunkFetchUserData";

const ShowUser = ({match, users}) => {
    const [user, setUser] = useState({address: {city: '', street: ''}})

    useEffect(() => {
        users.users.map(user => {
            if (user.email == match.params.email) {
                setUser(user)
            }
        })
    }, [])

    return (
        <div className="d-flex justify-content-center mt-5">
            <User user={user} key={user.id} showHome='' showView='d-none'/>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        users: state.users
    }
}

export default connect(mapStateToProps)(ShowUser)