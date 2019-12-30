import React from 'react'
import  {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import Actions from '../../redux/cart/cart.actions'
import {connect} from 'react-redux'
const toggleCartHidden=Actions.toggleCartHidden
const cartIcon=({toggleCartHidden})=>{
  return(
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>0</span>
    </div>
  )
}

const mapDispatchToProps=(dispatch)=>({
  toggleCartHidden:()=>(dispatch(toggleCartHidden()))
})
export default connect(null,
  mapDispatchToProps)(cartIcon);