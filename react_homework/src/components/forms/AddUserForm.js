import React, {useState} from "react";
import {connect} from 'react-redux'
import {createUser} from "../../redux/actions/actions";

const AddUserForm = ({props, createUser}) => {
    const [user, setUser] = useState({name: '', phone: '', email: ''})
    const [formDisplay, setFormDisplay] = useState({className:'form-group d-none'})
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [address, setAddress] = useState({city: '', street: ''})

    const handleSubmit = event => {
        event.preventDefault()
        let currentUser = user
        currentUser = {...user, address: address}
        createUser(currentUser)
        displayForm(false)
    }

    const handleInputHandler = (type, event) => {
        if (type === 'city' || type === 'street') {
            setAddress({...address, [type]: event.target.value})
        } else {
            setUser({...user, [type]: event.target.value})
        }

    }

    const displayForm = (isActive) => {
        if (isActive) {
            setFormDisplay({...formDisplay, className: 'form-group d-flex justify-content-center'})
            setIsButtonDisabled(true)
        } else {
            setFormDisplay({...formDisplay, className:'form-group d-none'})
            setIsButtonDisabled(false)
        }

    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <button
                className="btn btn-primary mr-1 mb-2 mt-2"
                onClick={displayForm.bind(this, true)}
                disabled={isButtonDisabled}
            >Add User</button>
            </div>

            <form onSubmit={handleSubmit.bind(this)}>
                <div className={formDisplay.className}>
                    <div className="col-md-4 mb-3">
                        <div className="input-group mt-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{height: 38, width: 80}}>Name</span>
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
                                <span className="input-group-text" style={{height: 38, width: 80}}>Phone</span>
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
                                <span className="input-group-text" style={{height: 38, width: 80}}>Email</span>
                            </div>
                            <input
                                type="text"
                                pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                                className="form-control"
                                placeholder="Email"
                                value={user.email}
                                onChange={handleInputHandler.bind(this, 'email')}
                                required={true}
                            />
                        </div>
                        <div className="input-group mt-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{height: 38, width: 80}}>City</span>
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
                                <span className="input-group-text" style={{height: 38, width: 80}}>Address</span>
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
                            >Submit</button>
                        </div>

                    </div>
                </div>
            </form>
        </div>

)
}

const mapDispatchToProps = {
    createUser
}

export default connect(null, mapDispatchToProps)(AddUserForm)