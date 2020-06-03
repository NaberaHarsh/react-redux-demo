import React, { useState } from 'react';
import { connect } from 'react-redux'      // use dto connect react component woth redux store
import { buyCake } from '../redux'

function NewCakeContainer(props){
    const [number,setNumber] = useState(1); // to provide the number of cakes that we want to buy
    return(
        <div>
            <h2>number of cakes - {props.numberOfCakes}</h2>
            <input type="number" value={number} onChange={(e)=> setNumber(e.target.value)} /> 
            <button onClick={()=>props.buyCake(number)} >Get Cake</button>          
    </div>
    )
}

const mapStateToProps = state =>{
    return{
        numberOfCakes: state.cake.numberOfCakes     //this will get the value of present amd updated state and will pass it to the pros names numverofcakes
    }                                                // since we have a root reducer where we have combined 2 reducers so we cannot access nubereofckaes deirectly since they have been assigned to cake property, so we use state.cake.numberofcakes   
}

const mapDispatchToProps = dispatch => {
    return{
      buyCake: number => dispatch(buyCake(number))    // this will get the dispatch function into the prop names buyCake and will dispatch it on click
    }                                                  // here we pass the number of cakes we want to buy
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(NewCakeContainer);