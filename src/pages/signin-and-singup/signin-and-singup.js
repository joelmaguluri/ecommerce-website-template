import React from 'react'
import Signin from '../../components/signin/sign-in'
import Signup from '../../components/sign-up/sign-up'
import './signin-and-singup.scss'
const SignInandSignUp=()=>
{
  return(
    <div className='sign-in-and-sign-up'>
     <Signin/>
     <Signup/>
    </div>
  )
}

export default SignInandSignUp;