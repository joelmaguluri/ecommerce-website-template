import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './pages/homepage/homepage'
import Shoppage from './pages/shoppage/ShopPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './index.css'
function App()
{
  return( 
    <div>
      <Router>
      <Route exact path='/' component={Homepage}/>
      <Route path='/shop' component={Shoppage}/>
      </Router>
    </div>
     )   
}
ReactDOM.render(<App/>, document.getElementById('root'));

