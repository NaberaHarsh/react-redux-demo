import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./userTypes"
import axios from 'axios'

 const fetchUsersRequest =()=>{
    return{
        type:FETCH_USERS_REQUEST
    }
}
 const fetchUsersSuccess = user =>{
return{
    type:FETCH_USERS_SUCCESS,
    payload: user
}
}
 const fetchUsersFailure = error =>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}
export const fetchUsers = ()  =>{       // asynchoronus function
    return (dispatch) =>{               // return function 
        dispatch(fetchUsersRequest())                   // can dispatch regular actions
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
          const user=response.data  
          dispatch(fetchUsersSuccess(user))
        })
        .catch(error => {
            const errorMsg=error.message
            dispatch(fetchUsersFailure(errorMsg))
        })
    }
}