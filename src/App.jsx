import React, { useEffect } from 'react'
import Header from './components/container/Header'
import Footer from './components/container/Footer'
import authService from './appwrite/auth'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/authslice'
import { Outlet } from 'react-router-dom'

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