import React, { useEffect } from 'react'
import {fetchUsers }from '../redux'
import { connect } from 'react-redux'

function UserContainer({ userData,fetchUsers}){
    useEffect(()=>{
fetchUsers()
    }, [])          // empty dependency array so that fetch users is dispatched only once
    return userData.loading ? (
        <h2>loading</h2>    )
        : userData.error ? (
            <h2>{userData.error}</h2>
        ) :
        (
            <div>
                <h2>UserList</h2>
                <div>
                {userData && userData.user && userData.user.map(users=> <p>{users.name}</p>)}
            </div>
            </div>
        )
}

const mapStateToProps = state =>{
    return{
        userData: state.user        // this user is comming from rootreducer.js as property of combineReducer
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchUsers: ()=> dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)