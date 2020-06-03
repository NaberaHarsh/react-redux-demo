import React from 'react'
import {connect} from 'react-redux'
import { buyCake, buyIceCream } from '../redux'


function ItemContainer(props){      // these props are from mapSatateToprops
return(
    <div>
        <h2>Item - {props.item}</h2>
        <button onClick={props.buyItem} >BuyItem</button>
    </div>
)
}

const mapStateToProps = (state, ownProps ) => {     // this own props pass the already exesting props
const itemState = ownProps.cake 
? state.cake.numberOfCakes
: state.iceCream.numberOfIceCream

return{
    item:itemState
}
}

const mapDispatchToProps = (dispatch , ownProps) => {
    const dispatchFunction = ownProps.cake
    ?  ()=> dispatch(buyCake())
    :  ()=> dispatch(buyIceCream())

    return{
        buyItem: dispatchFunction   
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer);