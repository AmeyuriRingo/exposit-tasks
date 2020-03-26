import {fetchUsers} from "../actions/actions";

const fetchUserData = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => checkResponse(response))
}

const checkResponse = (response) => {
    if (!response.ok) {
        throw Error(response.statusText)
    }
    return response.json()
}


export function thunkFetchUserData() {
    return async (dispatch) => {
        const response = await fetchUserData();
        dispatch(fetchUsers(response))
    }
}