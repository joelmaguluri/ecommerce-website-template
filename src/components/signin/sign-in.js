import React from 'react'
import FormInput from '../form-input/form-input'
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button'
import {signInWithGoogle} from '../../firebase/firebase.utils'
class Signin extends React.Component{
  constructor(){
    super();
    this.state={
      email:'',
      password:''
    }
  }
  HandleSubmit=(event)=>{
    event.preventDefault();
    this.setState({email:'',password:''});
  }
  HandleChange=(event)=>{
    const {value,name}=event.target;
    this.setState({[name]:value});
  }
  render(){
    return(
      <div className="sign-in">
        <div className="logo-container">
        <h2> I already have an account</h2>
        <span>Sign in with Email and password</span>
     
        <form onSubmit={this.HandleSubmit}>
          
          <FormInput type="email" name="email" onChange={this.HandleChange} value={this.state.email} 
          label="email" required/>
          <FormInput type="password" name="password" value={this.state.password} onChange={this.HandleChange} 
          label="password" required/>
          <div className="buttons">
          <CustomButton type="submit"> SignIn </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGooglesignIn>
          Sign in with Google
          </CustomButton> 
          </div>
        </form>
        </div>
      </div>
    )
  }
}
export default Signin;