import React from 'react';
import UserCards from "./components/showUsers/UserCards";
import AddUserForm from "./components/forms/AddUserForm";
import SearchBar from "./components/searchBar/SearchBar";

function App() {
    return (
        <div className="container pt-3">
            <div className="row">
                <div className="col">
                    <SearchBar/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <AddUserForm/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="container d-flex justify-content-around mt-3 flex-wrap">
                    <UserCards/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
