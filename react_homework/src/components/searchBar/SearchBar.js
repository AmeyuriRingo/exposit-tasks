import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {createSearchedUser} from "../../redux/actions/actions";

const SearchBar = ({users, createSearchedUser}) => {
    const [searchItem, setSearchItem] = useState({value: ''})

    const handleChange = event => {
        setSearchItem({value: event.target.value})
    }

    useEffect(() => {
        if (searchItem.value) {
            const results = users.users.filter(user =>
                user.name.includes(searchItem.value)
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

    },[searchItem])

    return (
        <form className="mt-2">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" value={searchItem.value}
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
    createSearchedUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)