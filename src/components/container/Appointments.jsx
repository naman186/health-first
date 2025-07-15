// HorizontalScrollSection.jsx
import React from 'react';
import DrList from '../hooks/DrList';
import { Link } from 'react-router-dom';
import BookAppointment from './BookAppointment';

function HorizontalScrollSection({ title, items }) {
  return (
    <div className="flex flex-col gap-5 ">
      <h4 className="text-3xl font-semibold">{title}</h4>
      
      <div className="dr-list flex overflow-x-auto space-x-4 scrollbar-hide py-2 px-1">
        {items.map((item, $id) => (
          <Link to={`/BookAppointment/${item.$id}`} key={$id}
            className="min-w-[260px] max-w-[260px] flex-shrink-0 "
          >
            <div className="bg-white shadow p-4 rounded-md ">
            <div className="mb-4 w-full border-2 border-transparent rounded-2xl bg-cover overflow-hidden">
              <img
                src="https://www.bombayhospitalindore.com/resources/assets/images/team/dr-abhinav-anand.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div> 
            <div className="data space-y-1">
              <p className="text-lg font-semibold">Dr. {item.name}</p>
              <p className="text-sm text-gray-600">{item.specialization}</p>
              <p className="text-sm text-gray-500">₹ {item.fees}</p>
            </div>
            </div>
            </Link>
          ))}
          </div>
        
      </div>
  );
}

function Appointments() {

  const doctors = DrList();
  
  
  return (
      <HorizontalScrollSection title="Spec" items={doctors} />
  );
}

export default Appointments;
