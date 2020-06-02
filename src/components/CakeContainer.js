import React from 'react';
import { connect } from 'react-redux'      // use dto connect react component woth redux store
import { buyCake } from '../redux'

function CakeContainer(props){
    return(
        <div>
            <h2>number of cakes - {props.numberOfCakes}</h2>
            <button onClick={props.buyCake} >Get Cake</button>
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
      buyCake: () => dispatch(buyCake())    // this will get the dispatch function into the prop names buyCake and will dispatch it on click
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(CakeContainer);