import { BUY_CAKE } from './cakeTypes'

 export const buyCake = (number = 1) =>{        // we assign default value 1, so if wew do not provide input then too it works
    return{
        type: BUY_CAKE,
        payload: number                         // we provide payload property here
    }
}