import CartTypes from './cart.types'
import AddNewItem from './AddNewItem'
const INITIAL_STATE={
  hidden:true,
  cartItems:[]
}
const cartReducer=(state=INITIAL_STATE,action)=>{
 switch(action.type)
 {
   case CartTypes.TOGGLE_CART_HIDDEN:
     return {
       ...state,
       hidden: !state.hidden
     }
   case CartTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems:AddNewItem(state.cartItems,action.payload)
      }
   default :
    return state;
 }

}
export default cartReducer;