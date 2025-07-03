import React from 'react'
import logo from "../assets/logo.svg"
import pfp from "../assets/pfp.svg"
import noti from "../assets/notification.svg"

function Header() {
  return (
    <>
    <div className="section">
        <div className="h-15 flex w-full px-1 sm:px-12 py-2 items-center justify-between overflow-hidden">
            <div className="logo-cont flex gap-3 items-center ">
            <div className="logo h-6 ">
                <img src={logo} alt="" />
            </div>
            <div className="logo-txt font-manrope h-8 font-bold text-lg ">
                Health First
            </div>
            </div>
            <div className="top-r flex gap-8 ">
                <ul className="flex items-center gap-8 font-semibold text-sm">
                    <div className="hidden sm:flex items-center gap-8">
                    <li>Home</li>
                    <li>Appointments</li>
                    <li>Medications</li>
                    <li>Messages</li>
                    </div>
                    
                    <div className="flex items-center gap-5 sm:gap-8">
                    <li><img src={noti} alt="" className="h-8" /></li>
                    <li><img src={pfp} alt="" className="h-8"/></li>
                    </div>
                </ul>
            </div>
            
        </div>
        <hr />
    </div>
    </>
  )
}

export default Header