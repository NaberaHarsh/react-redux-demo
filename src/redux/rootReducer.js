import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
    cake:cakeReducer,       // cakereducer is assigned to property cake, during access time we have to use this property also
    iceCream:iceCreamReducer,     // icecreamreducer is assigned to property icecream, during access time we have to use this property also
    user:userReducer
})

export default rootReducer;