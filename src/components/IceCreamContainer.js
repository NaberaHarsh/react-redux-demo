import React from 'react';
import { connect } from 'react-redux'      // use dto connect react component woth redux store
import { buyIceCream } from '../redux'

function IceCreamContainer(props){
    return(
        <div>
            <h2>number of IceCream - {props.numberOfIceCream}</h2>
            <button onClick={props.buyIceCream} >Get IceCream</button>
    </div>
    )
}

const mapStateToProps = state =>{
    return{
        numberOfIceCream: state.iceCream.numberOfIceCream     //this will get the value of present amd updated state and will pass it to the pros names numverofIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return{
      buyIceCream: () => dispatch(buyIceCream())    // this will get the dispatch function into the prop names buyIceCream and will dispatch it on click
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(IceCreamContainer);