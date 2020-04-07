import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {createSearchText} from "../../redux/actions/actions";

const SearchBar = ({searchBar ,createSearchText}) => {

    const handleChange = event => {
        createSearchText(event.target.value)
    }

    return (
        <form className="mt-2">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" value={searchBar ? searchBar.searchText : ''}
                       onChange={handleChange.bind(this)}/>
            </div>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        searchBar: state.searchBar
    }
}

const mapDispatchToProps = {
    createSearchText
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)