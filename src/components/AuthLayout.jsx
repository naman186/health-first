import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState, useEffect} from 'react'
import { useSelector } from 'react-redux'

export default function Protected ({children, authentication = true})
{
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector((state) => state.auth.status)
    useEffect (()=>{
        //understand the logic here later
        //if authentication is true, then user should be logged in
    
        if (authentication && !authStatus) {
      navigate('/login');
    }
    if (!authentication && authStatus) {
      navigate('/');
    }
    setLoader(false);
  }, [authStatus, authentication, navigate]);

    return loader ? <h1>Loading...</h1> : <>{children}</>
}