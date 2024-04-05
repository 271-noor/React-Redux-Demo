import axios from 'axios'
import { FETCH_USERS_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS
} from "./UserTypes"

export const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUserSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUserFailure = users => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: 'error'
    }
}

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.date
            dispatch(fetchUserSuccess(users))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchUserFailure(errorMsg))
        })
  }  
}