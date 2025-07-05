import React, { useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import BookApointment from './components/BookApointment'
import authService from './appwrite/auth'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/authslice'
import { Outlet } from 'react-router'
import Login from './components/Login'

function App() {

  const [loading, setLoading] = React.useState(true);
  const dispatch  = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login({user}));
      }
      else{
          dispatch(logout());
        }
      }).finally(() => setLoading(false));
      
  }, [])
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App