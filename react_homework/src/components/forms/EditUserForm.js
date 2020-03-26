import React, {useEffect, useState} from "react";
import {connect} from 'react-redux'
import {editUsers} from "../../redux/actions/actions";
import history from '../../history/history'

const EditUserForm = ({match, users, editUsers}) => {
    const [user, setUser] = useState({address: {city: '', street: ''}})
    const [address, setAddress] = useState({})

    useEffect(() => {
        users.users.map(user => {
            if (user.email == match.params.email) {
                setUser(user)
                setAddress(user.address)
            }
        })
    }, [])

    const handleSubmit = event => {
        event.preventDefault()
        users.users.map(searchedUser => {
            if (searchedUser.email == match.params.email) {
                searchedUser.name = user.name
                searchedUser.phone = user.phone
                searchedUser.email = user.email
                searchedUser.address = address
            }
        })
        editUsers(users.users)
        history.push('/')
    }

    const handleInputHandler = (type, event) => {
        if (type == 'city' || type == 'street') {
            setAddress({...address, [type]: event.target.value})
        } else {
            setUser({...user, [type]: event.target.value})
        }
    }

    return (
        <div className="container">
                <form onSubmit={handleSubmit.bind(this)}>
                    <div className="form-group d-flex justify-content-center">
                        <div className="col-md-4 mb-3">
                            <div className="input-group mt-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{height: 38, width: 80}} val>Name</span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    value={user.name}
                                    onChange={handleInputHandler.bind(this, 'name')}
                                    required={true}
                                />
                            </div>
                            <div className="input-group mt-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{height: 38, width: 80}} val>Phone</span>
                                </div>
                                <input
                                    type="phone"
                                    className="form-control"
                                    placeholder="Phone"
                                    value={user.phone}
                                    onChange={handleInputHandler.bind(this, 'phone')}
                                    required={true}
                                />
                            </div>
                            <div className="input-group mt-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{height: 38, width: 80}} val>Email</span>
                                </div>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={user.email}
                                    onChange={handleInputHandler.bind(this, 'email')}
                                    required={true}
                                />
                            </div>
                            <div className="input-group mt-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{height: 38, width: 80}} val>City</span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="City"
                                    value={address.city}
                                    onChange={handleInputHandler.bind(this, 'city')}
                                    required={true}
                                />
                            </div>
                            <div className="input-group mt-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{height: 38, width: 80}}
                                          val>Address</span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Street"
                                    value={address.street}
                                    onChange={handleInputHandler.bind(this, 'street')}
                                    required={true}
                                />
                            </div>
                            <div className="d-flex justify-content-between">
                                <button
                                    type="submit"
                                    className="btn btn-primary mr-1 mb-2 mt-2"
                                >Submit
                                </button>
                            </div>

                        </div>
                    </div>
                </form>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = {
    editUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserForm)