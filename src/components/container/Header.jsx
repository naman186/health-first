import React from 'react'
import logo from "/assets/logo.svg"
import pfp from "/assets/pfp.svg"
import noti from "/assets/notification.svg"
import {Logoutbtn, Button} from '../index'
import { Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'




function Header() {

    const dispatch = useDispatch();
    const authStatus = useSelector((state) => state.auth.status);
    const user = useSelector((state) => state.auth.user)
    const role = useSelector((state) => state.auth.role);
    
    
    const navItems = [
        {   name: 'Home', 
            path: '/',
            active: true,
            roles: ['user']
        },
        { name: 'Doctors',
         path: '/Search',
         active: authStatus,
         roles: ['user']
        },
        { name: 'Appointments',
         path: '/BookAppointment',
         active: authStatus,
         roles: ['user']
        },
        { name: 'Messages',
         path: '/DoctorHome',
         active: authStatus,
         roles: ['user']
        },
        { name: 'Dr.Home',
         path: '/DoctorHome',
         active: authStatus,
         roles: ['doctor']
        },
        { name: 'Patients',
         path: '/Patients',
         active: authStatus,
         roles: ['doctor']
        },
        { name: 'Appointments',
         path: '/Appointments',
         active: authStatus,
         roles: ['doctor']
        },

    ];

      const currentRole = authStatus ? role : 'guest';


  return (
    <>
    <div className="section">
        <div className="sm:h-15 flex w-full px-1 sm:px-12 py-2 items-center justify-between overflow-hidden ">
            <Link to={"/"}>
            <div className="logo-cont flex gap-3 items-center ">
            <div className="logo h-6 ">
                <img src={logo} alt="" />
            </div>
            
            <div className="logo-txt font-manrope h-8 font-bold text-lg ">
                Health First
            </div>
            </div>
            </Link>
            <div className="top-r flex gap-8 ">
                <ul className="flex items-center gap-8 font-semibold text-sm">
                    <div className="hidden sm:flex items-center gap-8">
                    {navItems.filter((item) => item.roles.includes(currentRole)).map((item, index) => (
                            item.active ?(<li key={index} className='hover:underline'>
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        ) : null ))}</div>
                    </ul>
                {authStatus && (
                    <div className="flex items-center gap-4">
                        <Link to="/UserProfile"><img src={pfp} alt="Profile" className="w-8 h-8 rounded-full" /></Link>
                        <img src={noti} alt="Notifications" className="w-6 h-6" />
                        <Logoutbtn>Logout</Logoutbtn>
                    </div>
                )}
                {!authStatus && (
                    <Link to="/login">
                        <Button className='rounded-2xl sm:text-sm text-sm'>Sign in</Button>
                    </Link>
                )}
                </div>

            </div>
        <hr />
    </div>
    </>
  )
}

export default Header