import React from "react";
import {Link} from "react-router-dom";

export default ({user, showHome = 'd-none', showView = ''}) => {
    return (
        <div className="card d-inline-block mr-5 mb-5" style={{width: 300, height: 270}}>
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">Phone - {user.phone}</p>
                    <p className="card-text">Address - {user.address.street}, {user.address.city}</p>
                    <p className="card-text">Email - {user.email}</p>
                    <div className="d-flex justify-content-between">
                        <Link to={`/edit/${user.email}`}>Edit</Link>
                        <div className={showHome}><Link to={`/`}>Home</Link></div>
                        <div className={showView}><Link to={`/profile/${user.email}`}>View</Link></div>
                    </div>
                </div>
        </div>
    )
}