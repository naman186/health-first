import React, { useState } from 'react';
import { FaUserMd, FaUsers, FaUserPlus , FaFilePrescription, FaClock, FaCog, FaPlus,FaCalendarAlt,FaRegChartBar,  FaNotesMedical } from 'react-icons/fa';
import { IoMdTrendingUp } from "react-icons/io";
const DoctorHome = () => {
  const [currentTime] = useState(new Date());

  const appointments = [
    { id: 1, name: 'Samiksha ', time: '9:00 AM', status: 'Pending', avatar: 'RS' },
    { id: 2, name: 'Aman Mehra', time: '12:00 PM', status: 'Accepted', avatar: 'AM' },
    { id: 3, name: 'Arjun Singh', time: '1:30 PM', status: 'Pending', avatar: 'AS' }
  ];

  const recentActivity = [
    { id: 1, text: 'Appointment with Samiksha completed', time: '11:35 AM', type: 'completed' },
    { id: 2, text: 'Prescription sent to Aman', time: '12:30 PM', type: 'prescription' },
    { id: 3, text: 'New appointment request from Aditya', time: '12:45 PM', type: 'request' }
  ];

  const quickActions = [
    { icon: FaPlus, label: 'Add Prescription', color: 'bg-green-500 hover:bg-green-600' },
    { icon: FaUserPlus , label: 'View Patients', color: 'bg-blue-500 hover:bg-blue-600' },
    { icon: FaCalendarAlt, label: 'Manage Schedule', color: 'bg-purple-500 hover:bg-purple-600' },
    { icon: FaRegChartBar, label: 'View Reports', color: 'bg-orange-500 hover:bg-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center gap-2">
                👋 Welcome back, Dr. Naman
              </h1>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <FaClock className="w-4 h-4 text-blue-500" />
                  Tuesday, 9 July 2025 - 11:32 AM
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Status: Clinic is OPEN - Closes at 6:00 PM
                </span>
              </div>
            </div>
            <button className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
              <FaCog className="w-4 h-4" />
              Settings
            </button>
          </div>
        </div>

        {/* Current Consultation */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg p-4 sm:p-6 mb-6 text-white">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <h2 className="text-lg font-semibold">Currently Consulting:</h2>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-xl font-bold">Samiksha</h3>
              <p className="text-blue-100">11:00 AM - 11:30 AM</p>
              <p className="text-blue-100 text-sm">Next: Aman Mehra at 12:00 PM</p>
            </div>
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition-colors">
              End Session
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <FaCalendarAlt className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Appointments Today</p>
                <p className="text-2xl font-bold text-gray-800">5</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <FaUsers className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Patients</p>
                <p className="text-2xl font-bold text-gray-800">108</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <FaFilePrescription  className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Prescriptions Today</p>
                <p className="text-2xl font-bold text-gray-800">3</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <IoMdTrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Pending Approvals</p>
                <p className="text-2xl font-bold text-gray-800">2</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Appointments */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Today's Appointments</h2>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                <FaPlus className="w-4 h-4" />
                Add Appointment
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 rounded-lg">
                  <tr>
                    <th className="text-left p-3 font-semibold text-gray-600">Patient Name</th>
                    <th className="text-left p-3 font-semibold text-gray-600">Time</th>
                    <th className="text-left p-3 font-semibold text-gray-600">Status</th>
                    <th className="text-left p-3 font-semibold text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment) => (
                    <tr key={appointment.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                            {appointment.avatar}
                          </div>
                          <span className="font-medium text-gray-800">{appointment.name}</span>
                        </div>
                      </td>
                      <td className="p-3 text-gray-600">{appointment.time}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          appointment.status === 'Accepted' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {appointment.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm transition-colors">
                            Accept
                          </button>
                          <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors">
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'completed' ? 'bg-green-500' :
                    activity.type === 'prescription' ? 'bg-blue-500' : 'bg-orange-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">{activity.text}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className={`${action.color} text-white p-4 rounded-lg flex flex-col items-center gap-2 transition-colors hover:scale-105 transform`}
              >
                <action.icon className="w-6 h-6" />
                <span className="text-sm font-medium text-center">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorHome;