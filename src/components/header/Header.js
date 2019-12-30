import React from 'react'
import './header.styles.scss'
import  {ReactComponent as Logo} from './crown.svg'
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropDown'
class Header extends React.Component{
    render(){
    const {currentUser,hidden}=this.props;
    console.log("hidden is "+hidden)
    return(
    <div className="header">
      <Link className='logo-container' to='/'>
      <Logo className="logo"/>
      </Link>
      <div className="options">
        <Link className='option' to='/shop'>
         SHOP
        </Link>
        <Link className='option' to='/contact'>
         CONTACT
        </Link>
        {
          
          currentUser ?
          <div className="option" onClick={()=>auth.signOut()}> SIGN OUT </div>
          :
          <Link to='/signin'>SIGN IN </Link>
        }
       <CartIcon/>
      </div>
      {hidden ? null:<CartDropdown/>}
    </div>
    )
    
  }
}
  const mapStateToProps=state=>(  
  {
    currentUser:state.user.currentUser,
    hidden:state.cart.hidden
  })

 export default connect(mapStateToProps)(Header);