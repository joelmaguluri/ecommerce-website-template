import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './pages/homepage/homepage'
import Shoppage from './pages/shoppage/ShopPage'
import Header from './components/header/Header'
import SignInSignUp from './pages/signin-and-singup/signin-and-singup'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './index.css'
import {auth} from './firebase/firebase.utils'
import {createUserProfileDocument} from './firebase/firebase.utils'
 class App extends React.Component
{
  constructor(){
    super();
    this.state={
      currentUser:null
    }; 
  } 
  unsubscribeFromAuth=null
  componentDidMount()
  {
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      //this.setState({currentUser:user});
    
      createUserProfileDocument(userAuth);
      
        /*userRef.onSnapshot(snapshot=>{
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          })
        })*/
        this.setState({currentUser:userAuth});
      })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  return( 
    <div>
      <Router>
      <Header currentUser={this.state.currentUser}/>
      <Route exact path='/' component={Homepage}/>
      <Route path='/shop' component={Shoppage}/>
      <Route path='/signin' component={SignInSignUp}/>
      </Router>
    </div>
     )   
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));

