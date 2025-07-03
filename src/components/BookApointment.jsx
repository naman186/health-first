import React from "react";
import arrow from "../assets/arrow.svg";
import pfp from "../assets/pfp.svg";

function BookApointment() {
  return (
    <>
      <section className="book-appointment m-1.5 mx-2">
        <header className="head flex items-center py-3 mb-1.5 ">
          <img src={arrow} alt="" className="" />
          <h2 className="flex-1 text-center font-bold">Book Appointment</h2>
          <img src={pfp} alt="" className="h-8" />
        </header>

        <section className="mx-1">
          <div className="container">
            <div className="doctor-pf flex flex-row-reverse justify-between items-center gap-5">
              <div className="dr-pfp mb-4 h-40 w-35 border-2 border-transparent rounded-2xl bg-cover overflow-hidden">
                <img
                  src="https://www.bombayhospitalindore.com/resources/assets/images/team/dr-abhinav-anand.jpg"
                  alt=""
                />
              </div>
              <div className="dr-text font-sans items-start justify-between flex flex-col gap-1 ">
                <h1 className="text-xl font-bold">Dr. John Doe</h1>
                <div className="flex text-xs text-gray-600">
                  <p>Cardiologist</p>
                  <p className="mx-2">|</p>
                  <p>12+ years</p>
                </div>
                <button className="mt-2 border-1 py-1.5 px-2.5 text-xs font-semibold border-black text-black rounded-lg">
                  View Profile
                </button>
              </div>
              </div>
              <div className="dates">
                <h2 className="text-lg font-semibold mb-2">Available Dates</h2>
                <div className="date-list flex flex-wrap gap-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                    <button
                      key={index}
                      className="border-1 border-gray-300 rounded-lg px-3 py-1 text-sm hover:bg-gray-100"
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>
              <div className="filters">
                <button className="mt-2 border-1 py-1.5 px-2.5 text-xs font-semibold border-black text-black rounded-lg"> 
                  <span><img src="https://img.icons8.com/windows/20/sorting-options.png" alt="" /> </span> <span>Filter</span>
                </button>
              </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default BookApointment;
