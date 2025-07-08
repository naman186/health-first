import React from 'react'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { login as authLogin } from '../../store/authslice'
import { set, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import logo from "/assets/logo.svg"
import authService from '../../appwrite/auth'


function Signup() {
  const [error, setError] = useState('')
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const create = async (data) => { //the data here is which was taken by reacthookform
    setError('') // Reset pehle wala error message
    try {
      const userData  = await authService.createAccount(data) 
      if(userData){
        const userData = await authService.getCurrentUser()
        if(userData){
          dispatch(authLogin(userData))
          navigate('/')
        }
      }
    } catch (err) {
      setError(err.message)
    }
  }


  return (
    <>
      <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left Side (Brand/Visual) */}
      <div
        className="hidden md:flex md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/login.jpg')`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-black/50">
          <div className="text-white text-center px-4">
            <img
              src={logo}
              alt="Logo"
              className="mx-auto w-24 mb-4"
            />
            <p className="text-xl font-semibold">
              Sign in or create an account
            </p>
          </div>
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-6 py-12 bg-white">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">Sign in</h2>
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>

          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 border px-4 py-2 rounded-md hover:bg-gray-50">
              <img
                src="https://img.icons8.com/color/24/google-logo.png"
                alt="Google"
              />
              Continue with Google
            </button>
            <button className="w-full flex items-center gap-3 border px-4 py-2 rounded-md hover:bg-gray-50">
              <img
                src="https://img.icons8.com/fluency/24/facebook-new.png"
                alt="Facebook"
              />
              Continue with Facebook
            </button>
            <button className="w-full flex items-center gap-3 border px-4 py-2 rounded-md hover:bg-gray-50">
              <img
                src="https://img.icons8.com/ios-filled/24/mac-os.png"
                alt="Apple"
              />
              Continue with Apple
            </button>
          </div>


          <div className="flex items-center gap-2 text-gray-400">
            <hr className="flex-grow border-gray-300" />
            <span className="text-sm">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <form onSubmit={handleSubmit(create)}>
          <div className="space-y-4">

            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring focus:ring-blue-300"
              placeholder="Your Name"
              {...register('name', {required:true})}
            />

            <label className="block text-sm font-medium">Email address</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring focus:ring-blue-300"
              placeholder="example@email.com"
              {...register('email', {required:true, validate: {matchPattern: 
                (value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) || "Invalid e-mail, Please re-enter correct email"}})}
            />
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter Password"
              {...register('password', {required: true})}
            />
            <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition">
              Sign up with Email
            </button>
          </div>
          </form>

          <div className="text-sm text-blue-600 hover:underline">
            <Link to="#">Get help signing in</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Signup