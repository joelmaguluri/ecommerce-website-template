import {combineReducers} from 'redux'
import UserReducer from './user/UserReducer'
import CartReducer from './cart/cart.reducers'
export default combineReducers({
  user:UserReducer,
  cart:CartReducer
});