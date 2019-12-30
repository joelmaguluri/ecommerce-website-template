import CartTypes from './cart.types'
const toggleCartHidden=()=>{
  return {
  type:CartTypes.TOGGLE_CART_HIDDEN
}
}
const AddItemToCart=(item)=>{
  return{
    type:CartTypes.ADD_TO_CART,
    payload:item
  }
}
export default {toggleCartHidden,AddItemToCart};