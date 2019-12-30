const AddNewItem=(cartItems,Item)=>{
 const ExistingItem= cartItems.find(cartItem=>(cartItem.id===Item.id))
 if(ExistingItem)
 {
   return cartItems.map(cartItem=>
    (cartItem.id===Item.id?{...cartItem,quantity:cartItem.quantity+1}:
      cartItem))
 }

 return [...cartItems,{...Item,quantity:1}]

}

export default AddNewItem