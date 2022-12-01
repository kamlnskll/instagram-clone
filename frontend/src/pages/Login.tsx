import React, {useState} from 'react'
import { loginUser } from '../utils/axios/userAPIs'
import { useNavigate } from 'react-router'
import { useUserContext } from '../hooks/useUserContext'


const Login = () => {

  const { dispatch } = useUserContext()
  const token = localStorage.getItem('token')


  const [loginData, setLoginData] = useState({
    // email: '',
    userName: '',
    password: '',
  })

  const changeHandler = (e: any) => {
    setLoginData(prevValues => {
    return { ...prevValues,[e.target.name]: e.target.value}
  })
  }

  const navigate = useNavigate()


  return (
    <div className='w-1/2 mx-auto border h-screen'>
      <div className=''>
      <h1 className='text-center'>Instagram Clone</h1>
      <form className='flex flex-col'>
        <input placeholder="Username or Email" type='text' name='userName' onChange={changeHandler} required/>
        <input placeholder="Password" type='password' name='password' onChange={changeHandler} required/>
        <button className='bg-sky-200 text-center' type='button' onClick={() => loginUser(loginData.userName, loginData.password).then(() => {
          dispatch({type: 'LOGIN', payload: token})
          navigate('/')}).then(() => console.log('Logged in with token', {token})).catch(error => console.log(error))}>Login User</button>
      </form>

      <h1>Forgot password?</h1>
      </div>
      <div>
      <h1>Don't have an account? Sign up</h1>
      </div>
      <h1>Get the app.</h1>
      <div className='flex'><h1>Apple Badge</h1><h1>Google Badge</h1></div>
      </div>
  )
}

export default Login