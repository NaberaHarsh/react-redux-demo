import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux';

function HooksCakeContainer(props){
   const numberOfCakes = useSelector(state => state.numberOfCakes) // this hook accecpts state as paramater and return present value of cakes
   const dispatch = useDispatch()       // stores dispatch property in dispatch variable
   return(
        <div>
            <h2>number of cakes - {numberOfCakes} </h2>
            <button onClick={()=>dispatch(buyCake())} >Get Cake</button>
    </div>
    )
}
export default HooksCakeContainer;

// using hooks may look easy but it give some usage warnings with big code and nesting  of components 
