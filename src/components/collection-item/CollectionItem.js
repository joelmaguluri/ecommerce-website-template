import React from 'react'
import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button'
import Actions from '../../redux/cart/cart.actions'
import {connect} from 'react-redux'
const AddItemToCart=Actions.AddItemToCart;
console.log(AddItemToCart)
function CollectionItem({item,AddItemToCart}){
  const {name,price,imageUrl}=item;
  return(
    <div className="collection-item">
      <div style={{
        backgroundImage:(`url(${imageUrl})`)
      }} className="image"></div>
      <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price} </span>
       <CustomButton onClick={()=>AddItemToCart(item)}  inverted> ADD TO CART</CustomButton>
      </div>
    </div>
  )
    }
const mapDispatchToProps=dispatch=>({
  AddItemToCart:item=>(dispatch(AddItemToCart(item)))
})
export default connect(null,mapDispatchToProps)(CollectionItem);