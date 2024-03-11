import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
  const [isSignIn,setSignIn]=useState(true);

  const toggleSignInForm=()=>{
    setSignIn(!isSignIn);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <form className="w-3/12 p-12 absolute bg-[#1d2436] my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80" action="">
        <h1 className='text-3xl font-bold py-4'>{isSignIn?"Sign In":"Sign Up"}</h1>
        {!isSignIn && <input type="text" placeholder='Full Name' className='p-3 my-4 w-full bg-gray-600 rounded-lg ' />}
        <input type="text" placeholder='Email' className='p-3 my-4 w-full bg-gray-600 rounded-lg ' />
        <input type="password" placeholder='Password' className='p-3 my-4 w-full bg-[#e4dada] rounded-lg text-slate-900' />
        <button className='my-6 p-3 bg-red-600 w-full rounded-lg '>{isSignIn?"Sign In":"Sign Up"}</button>
        <p className='' onClick={toggleSignInForm}>{isSignIn?"New to MovieFlix? Sign Up now":"Already Have an Account? Sign In now!"}</p>
      </form>
    </div>
  )
}

export default Login