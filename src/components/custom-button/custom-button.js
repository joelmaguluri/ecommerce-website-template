import React from 'react'
import './custom-button.style.scss'
const CustomButton =({children,isGooglesignIn,...OtherProps})=>{
  return(
    <button
     className={`${ isGooglesignIn ? 'google-sign-in' : ''} custom-button`} {...OtherProps} >
    {children}
    </button>
  )
}
 
export default CustomButton;