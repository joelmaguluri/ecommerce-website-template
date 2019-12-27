import React from 'react';
import Homepage from './pages/homepage/homepage'
import Shoppage from './pages/shoppage/ShopPage'
import Header from './components/header/Header'
import SignInSignUp from './pages/signin-and-singup/signin-and-singup'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import './index.css'
import ReactDOM from 'react-dom'
import {auth} from './firebase/firebase.utils'
import {createUserProfileDocument} from './firebase/firebase.utils'

import setCurrentUser from './redux/user/user.actions'
import {Provider} from 'react-redux'
import store from './redux/store.js'
import {connect} from 'react-redux'

 class App extends React.Component
{
 
  unsubscribeFromAuth=null
  componentDidMount()
  {
    const setCurrentUser=this.props.setCurrentUser
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
    
     if(userAuth)
     {
       await (await createUserProfileDocument(userAuth)).onSnapshot(snapshot=>{
         this.props.setCurrentUser({
           id:snapshot.id,
           ...snapshot.data()
         })
       })
     }
     setCurrentUser(userAuth)
      })
    
   
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  return( 
      
      <Router>
      <Header />
      <Route exact path='/' component={Homepage}/>
      <Route path='/shop' component={Shoppage}/>
      <Route path='/signin' render={()=>this.props.currentUser ?(<Redirect to='/'/>) :(<SignInSignUp/>)}/>
      </Router>
    

     )   
  }
}

const mapStateToProps=({user})=>{
 return {currentUser:user.currentUser}
}
const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>(dispatch(setCurrentUser(user)))
})

const MYAPP= connect(mapStateToProps,mapDispatchToProps)(App)
ReactDOM.render(<Provider store={store}><MYAPP/></Provider>,document.getElementById('root'))

