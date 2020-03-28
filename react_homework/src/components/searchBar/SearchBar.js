import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {createSearchedUser, createSearchText} from "../../redux/actions/actions";

const SearchBar = ({users,createSearchText, createSearchedUser}) => {

    const handleChange = event => {
        createSearchText(event.target.value)
    }

    useEffect(() => {
        if (users.searchText) {
            const results = users.users.filter(user =>
                user.name.includes(users.searchText)
            )
            if (results.length !== 0) {
                createSearchedUser(results)
            } else {
                let empty = {
                    empty: true
                }
                createSearchedUser(empty)
            }
        } else {
            let empty = undefined
            createSearchedUser(empty)
        }
    }, [users.searchText])

    return (
        <form className="mt-2">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" value={users.searchText ? users.searchText : ''}
                       onChange={handleChange.bind(this)}/>
            </div>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = {
    createSearchedUser,
    createSearchText
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)