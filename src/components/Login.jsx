import React from 'react'
import { useState } from 'react'
import { Link, Navigate } from 'react-router'
import { login as authLogin } from '../store/authslice'
import { Button, Input } from './index'
import { set, useForm } from 'react-hook-form'

function Login() {
  const [error, setError] = useState('')
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const login = async (data) => {
    setError('') // Reset pehle wala error message
    try {
      const session  = await authService.login(data)
      if(session){
        const userData = await authService.getCurrentUser()
        if(userData){
          dispatch(authLogin(userData))
          navigate('/')
      }
    } }
    catch (err) {
      setError(err.message)
    }
  }


  return (
    <>
      <div>Login</div>
    </>
  );
}

export default Login