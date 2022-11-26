import React, {useState} from 'react'
import { useNavigate } from 'react-router'
import { registerNewUser } from '../utils/axios/userAPIs'

const Register = () => {

const navigate = useNavigate()



const [registrationData, setRegistrationData] = useState({
email: '',
fullName: '',
userName: '',
password: '',
// confirmPassword: '',

})

const changeHandler = (e: any) => {
  setRegistrationData(prevValues => {
  return { ...prevValues,[e.target.name]: e.target.value}
})
}

// const registerHandle = (email: string, fullName: string, userName: string, password: string) => {

// registerHandle(email, fullName, userName, password)


// }

  return (
    <div className='mx-auto w-1/2'>
    <div className='bg-white'>
    <h1 className=''>Instagram</h1>
    <h2>Sign up to see photos and videos from your friends</h2>
    <div>
    <form className=''>
    <input type='text' className='flex' placeholder='Email Address' name='email' onChange={changeHandler} required/>
    <input type='text' className='flex' placeholder='Full Name' name='fullName' onChange={changeHandler} required/>
    <input type='text' className='flex' placeholder='Username' name='userName' onChange={changeHandler} required/>
    <input type='password' className='flex' placeholder='Password' name='password' onChange={changeHandler} required/>
    </form>
    <button className='bg-sky-200 text-center' onClick={() => registerNewUser(registrationData.email, registrationData.fullName, registrationData.userName, registrationData.password).then(() => navigate('/')).catch(error => console.log(error))}>Sign Up</button>
    </div>    
    </div> 
    <div className='border bg-white'><h1>Already have an account? Sign in. </h1></div>
    <div className='border bg-white'>
    <h1>Get the app</h1>
    <div className='flex'><h1>Apple Badge</h1><h1>Android Badge</h1></div>
    </div>

    </div>
  )
}

export default Register