import React from 'react'

function Footer() {
  return (
    <>
      <section className='bg-gray-200 text-gray-700'>
        <div className="f-container">
            <details>
              <summary className="pt-5 text-sm font-bold">Company</summary>
                <ul className="flex-col space-y-2">
                <li><a href="#home" className="text-gray-700 hover:text-blue-500">Home</a></li>
                <li><a href="#about" className="text-gray-700 hover:text-blue-500">About Us</a></li>
                <li><a href="#services" className="text-gray-700 hover:text-blue-500">Services</a></li>
                <li><a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a></li>
                </ul>
            </details>
            <hr/>
            <details>
              <summary className="text-sm font-bold">Our Services</summary>
              <ul className="flex-col space-y-2">
                <li><a href="#home" className="text-gray-700 hover:text-blue-500">Book an Appointment</a></li>
                <li><a href="#about" className="text-gray-700 hover:text-blue-500"></a></li>
                <li><a href="#services" className="text-gray-700 hover:text-blue-500">Services</a></li>
                <li><a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a></li>
                </ul>
            </details>

            <hr/>
            <details>
              <summary className="text-sm font-bold">Buy Meds</summary>
                <ul className="flex-col space-y-2">
                <li><a href="#home" className="text-gray-700 hover:text-blue-500">Nearest Medicals</a></li>
                <li><a href="#about" className="text-gray-700 hover:text-blue-500">Nearest Clinics</a></li>
                <li><a href="#services" className="text-gray-700 hover:text-blue-500">Nearest Doctors</a></li>
                </ul>
            </details>
            <hr/>
            <details>
              <summary className="text-sm font-bold">Need Help</summary>
                <ul className="flex-col space-y-2">
                <li><a href="#home" className="text-gray-700 hover:text-blue-500">Nearest Medicals</a></li>
                <li><a href="#about" className="text-gray-700 hover:text-blue-500">Nearest Clinics</a></li>
                <li><a href="#services" className="text-gray-700 hover:text-blue-500">Nearest Doctors</a></li>
                </ul>
            </details>
            <hr/>
            <div className="copyright p-4 text-xs">
                <p>© 2025 PharmEasy. All Rights Reserved</p>
            </div>
        </div>
      </section>
    </>
  )
}

export default Footer