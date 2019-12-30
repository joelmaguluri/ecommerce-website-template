import React from 'react'
import './custom-button.style.scss'
const CustomButton =({children,isGooglesignIn,inverted,...OtherProps})=>{
  return(
    <button
     className={`${ inverted ? 'inverted' : ''}
     ${ isGooglesignIn ? 'google-sign-in' : ''} custom-button`} {...OtherProps} >
    {children}
    </button>
  )
}
 
export default CustomButton;