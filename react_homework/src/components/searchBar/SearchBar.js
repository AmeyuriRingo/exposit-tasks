import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {createSearchedUser} from "../../redux/actions/actions";

const SearchBar = ({users, createSearchedUser}) => {
    const [searchItem, setSearchItem] = useState({value: ''})

    const handleChange = event => {
        setSearchItem({value: event.target.value})

    }

    useEffect(() => {
            const results = users.users.filter(user =>
                user.name.includes(searchItem.value)
            )
            createSearchedUser(results)
    },[searchItem])

    return (
        <form>
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