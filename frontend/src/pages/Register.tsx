import React from 'react'

const Register = () => {
  return (
    <div className='mx-auto w-1/2'>
    <div>
    <h1 className=''>Instagram</h1>
    <h2>Sign up to see photos and videos from your friends</h2>
    <div>
    <form className=''>
        <div className='border-4'>
    <input type='text' className='flex' placeholder='Email Address' required/>
    <input type='text' className='flex' placeholder='Full Name' required/>
    <input type='text' className='flex' placeholder='Username' required/>
    <input type='text' className='flex' placeholder='Password' required/>
    </div>
    </form>
    <h2 className='bg-sky-200 text-center'>Sign Up</h2>
    </div>    
    </div> 
    <div>Already have an account? Sign in.</div>
    <div>
    <h1>Get the app</h1>
    <div className='flex'><h1>Apple Badge</h1><h1>Android Badge</h1></div>
    </div>

    </div>
  )
}

export default Register