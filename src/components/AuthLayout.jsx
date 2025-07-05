import React from 'react'
import {useNavigate} from 'react-router'
import {useSelector, useState, useEffect} from 'react'

export default function Protected ({children, authentication = true})
{
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state.auth.status)
    useEffect (()=>{
        //understand the logic here later
        //if authentication is true, then user should be logged in
        if (authentication && authStatus !== authentication) {
            navigate('/login')
        }
        else if (!authentication && authStatus === authentication) {
            navigate('/')
        }
        setLoader(false)
    },[authStatus, authentication, navigate])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}