import React from 'react'
import './cart-drop-down.styles.scss'
import CustomButton from '../custom-button/custom-button'
import CartItem from '../cart-item/CartItem'
import {connect} from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
const CartDropdown=({cartItems})=>{
return(
  <div className='cart-dropdown'>
    <div className='cart-items'>
     {
       cartItems.map(Item=>(<CartItem key={Item.id} item={Item}/>))
     }

    </div>
      <CustomButton>GO TO CHECKOUT </CustomButton>
  </div>
)
}

const mapStatetoProps=(state)=>({
cartItems:selectCartItems(state)
})
export default connect(mapStatetoProps)(CartDropdown);