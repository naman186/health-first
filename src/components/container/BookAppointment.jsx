import React from "react";
import arrow from "/assets/arrow.svg";
import pfp from "/assets/pfp.svg";

  const clinics = [
    {
      name: 'City Health Clinic, Rajwada',
      distance: '1.4 km away',
      slots: ['09:30 AM', '11:00 AM', '01:00 PM', '03:30 PM', '05:00 PM'],
    },
    {
      name: 'Aurobindo Hospital, Vijay Nagar',
      distance: '2.1 km away',
      slots: ['10:00 AM', '12:30 PM', '02:00 PM', '04:30 PM'],
    },
  ];

function BookAppointment() {
  return (
    <>
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6 md:p-10 overflow-hidden">
      {/* Doctor Header Section */}
      <div className="bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row gap-6 mb-8">
        <img
          src="https://www.bombayhospitalindore.com/resources/assets/images/team/dr-abhinav-anand.jpg"
          alt="Doctor"
          className="w-36 h-36 md:w-48 md:h-48 rounded-xl object-cover"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold">Dr. Abhinav Anand</h1>
            <p className="text-gray-500">Pediatrician</p>
            <p className="text-sm mt-2 text-gray-600">MBBS, MD – Pediatrics • 12 years experience</p>
          </div>
          <button className="mt-4 w-max bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700">
            View Full Profile
          </button>
        </div>
      </div>

      {/* Date & Filters */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <div className="flex gap-4">
          <button className="px-4  bg-blue-100 text-blue-600 rounded-md font-medium">Today</button>
          <button className="px-4  bg-gray-200 rounded-md font-medium">Tomorrow</button>
          <button className="px-4  bg-gray-200 rounded-md font-medium">This Weekend</button>
        </div>
        <div className="flex gap-3 flex-wrap">
          <button className="text-sm bg-gray-200 px-3 py-1 rounded">Morning</button>
          <button className="text-sm bg-gray-200 px-3 py-1 rounded">Afternoon</button>
          <button className="text-sm bg-gray-200 px-3 py-1 rounded">Evening</button>
          <button className="text-sm bg-gray-200 px-3 py-1 rounded">Weekend Only</button>
        </div>
      </div>

      {/* Clinics and Slots */}
      <div className="space-y-8">
        {clinics.map((clinic, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-6">
            <div className="mb-4">
              <h2 className="text-lg font-semibold">{clinic.name}</h2>
              <p className="text-sm text-gray-500">{clinic.distance}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {clinic.slots.map((slot, idx) => (
                <button
                  key={idx}
                  className="px-4  bg-gray-100 border border-gray-300 rounded-md hover:bg-blue-100 hover:border-blue-500 transition"
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default BookAppointment;
