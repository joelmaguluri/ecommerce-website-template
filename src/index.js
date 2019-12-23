import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './pages/homepage/homepage'
import Shoppage from './pages/shoppage/ShopPage'
import Header from './components/header/Header'
import SignInSignUp from './pages/signin-and-singup/signin-and-singup'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './index.css'
function App()
{
  return( 
    <div>
      <Router>
      <Header/>
      <Route exact path='/' component={Homepage}/>
      <Route path='/shop' component={Shoppage}/>
      <Route path='/signin' component={SignInSignUp}/>
      </Router>
    </div>
     )   
}
ReactDOM.render(<App/>, document.getElementById('root'));

