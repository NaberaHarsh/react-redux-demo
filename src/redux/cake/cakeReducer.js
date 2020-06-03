import { BUY_CAKE } from "./cakeTypes"


const intialState={
    numberOfCakes:10
}

const cakeReducer= (state= intialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numberOfCakes: state.numberOfCakes - action.payload         //  number of cakes  -  no we want to buy
        }
        default : return state
    }
}

export default cakeReducer;