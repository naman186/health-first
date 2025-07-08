import React from 'react'
import { Link } from 'react-router';

function DocotorsCard() {

    const dummyDoctors = [
      {
        name: 'Dr. Sarah Johnson',
        specialty: 'Cardiology',
        rating: 4.5,
        reviews: 128,
        distance: '2.3 miles',
        time: 'Today, 2:00 PM',
      },
      {
        name: 'Dr. Michael Chen',
        specialty: 'Dermatology',
        rating: 4.0,
        reviews: 95,
        distance: '1.5 miles',
        time: 'Tomorrow, 10:30 AM',
      },
    ];

  return (
    <>
    <ul>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {dummyDoctors.map((doctor, index) => (
      <li key = {index}>
      <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
        <div className="flex items-center gap-3">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/doctor-male.png"
            alt="Doctor"
            className="w-12 h-12"
          />
                  
          <div>
            <h3 className="font-semibold text-gray-800">{}</h3>
            <p className="text-sm text-gray-600">{doctor.name}</p>
          </div>

        </div>
          <div className="mt-2 text-sm text-gray-500">
            ⭐ 4.5 ({doctor.reviews}) • {doctor.distance}
          </div>

        <div className="mt-2 text-sm text-gray-500">
         Next available: <span className="text-gray-700 font-medium">{doctor.time}</span>

        </div>
          <Link to={"/BookAppointment"}>
          <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Book Appointment
          </button>
          </Link>
        </div></li>
    ))}
    
    </div>
    </ul>
    
    </>
  )
}

export default DocotorsCard