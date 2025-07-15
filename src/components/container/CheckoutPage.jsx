import React, { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaHospital, FaIndianRupeeSign, FaRupeeSign,FaNotesMedical  } from "react-icons/fa6";
import useUserData from "../hooks/userData";
import useDrData from "../hooks/DrData";
import { Link, useNavigate, useParams } from "react-router-dom";
import databaseService from "../../appwrite/databaseService";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


function CheckoutPage() {
  const [bookingFor, setBookingFor] = useState("myself");
  const [paymentMethod, setPaymentMethod] = useState("gpay");

  const user = useUserData();
  const {id} = useParams();
  const dr = useDrData(id);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  console.log(id)

  const doctor = useSelector((state) => state.booking?.doctor);
  const clinic = useSelector((state) => state.booking?.clinic);
  const slot = useSelector((state) => state.booking?.slot);   
  console.log(doctor);

  const handleConfirmBooking = async () => {
  try {
    // Step 1: Check existing appointments at that time
    const existingList = await databaseService.listAppointments();
    

    const tokenNo = 1;

    const appointmentData = {
      user: user.$id,
      doctors: dr.$id,
      clinic: clinic.$id,
      DateTime: slot.$id,
      status: "confirmed",
      tokenNo: tokenNo,
      createdAt: new Date().toISOString(),
      day: "Monaday",
    };

    // Step 3: Save to Appwrite
    await databaseService.createAppointment(appointmentData);
    alert(`Booking confirmed! Your token number is ${tokenNo}`);
    Navigate("/");
  } catch (error) {
    console.error("Error booking appointment:", error);
    alert("Booking failed. Please try again.");
  }

    
     

};


  return (
    <div className="min-h-screen  px-4 py-6 md:px-20 bg-gray-50 text-gray-800 font-kumbh">
        <h2 className="text-xl font-semibold mb-6">Book Appointment</h2>
     <div className="sm:flex gap-5">
     <div className="flex flex-col flex-1/2">

      {/* Booking For */}
      <div className="bg-white border-1 border-gray-400 rounded-xl shadow-md p-4 mb-6 space-y-2">
        <p className="font-bold">This appointment is for:</p>
        <div className="space-y-3 ">
          <label className="flex items-center gap-3 border-1 border-gray-400 rounded-lg py-2 px-2">
            <input
              type="radio"
              name="bookingFor"
              value="myself"
              checked={bookingFor === "myself"}
              onChange={() => setBookingFor("myself")}
              className="accent-blue-600"
            />
            <div className="">
              <p className="font-semibold">Myself</p>
              <p className="text-sm text-gray-500 font-semibold">{user.name} • {user.phone}</p>
            </div>
          </label>

          <label className="flex items-center gap-3 py-2 px-2 rounded-xl border-gray-400 border-1">
            <input
              type="radio"
              name="bookingFor"
              value="someoneElse"
              checked={bookingFor === "someoneElse"}
              onChange={() => setBookingFor("someoneElse")}
              className="accent-blue-600"
            />
            <div>
              <p className="font-semibold">Someone Else</p>
              <p className="text-sm text-gray-500 font-semibold">Add details for another person</p>
            </div>
          </label>
        </div>
      </div>

      {/* Appointment Details */}
      <div className="bg-white border-gray-400 border-1 rounded-xl shadow-md p-4 mb-6 space-y-3">
        <p className="font-bold ">Appointment Details</p>
        <div className="space-y-1 text-sm">
          <div className="flex gap-2.5">
          <img src="https://www.bombayhospitalindore.com/resources/assets/images/team/dr-abhinav-anand.jpg" className="relative inline-block h-10 w-10 !rounded-full  object-cover object-center "/>
          <span><p><strong>Dr. {dr.name}</strong></p>
          <p className="text-[12px] font-semibold font-sans-serif text-gray-700"> {dr.specialization} <strong>•</strong> {dr.experience} years exp. <strong>•</strong> <span>{dr.degree?.join(' | ')}</span> </p> </span>
          </div>

          <hr className="border-gray-500"/>

          <div className="flex gap-2.5 items-center">
          <FaHospital size={20} />
          <span><p><strong>{dr.clinic?.[0]?.name || "Loading clinic name..."}</strong></p>
          <p className="text-[12px] font-semibold font-sans-serif text-gray-700">{dr.clinic?.[0]?.Address || "Loading clinic name..."}</p> </span>
          </div>
          <div className="flex gap-2.5 items-center">
          <FaCalendarAlt size={20} /> 
          <span className=""><p><strong>{dr.timeSlots?.[0]?.DateTime.split("T")[0]}</strong></p>
          <p className="text-[12px] font-semibold font-sans-serif text-gray-700">{dr.timeSlots?.[0]?.DateTime.split("T")[1]}</p> </span>
          </div>
          <div className="flex gap-2.5 font-semibold ">
          <FaIndianRupeeSign size={20} />
          <p className="text-bold">500</p>
          </div>
        </div>
      </div>

      {/* Notes */}
      <details className="mb-6 border-gray-400 border-1 bg-white rounded-lg">
        <summary> <FaNotesMedical className="inline text-blue-700" /> Add notes for doctor</summary>
        <textarea
          className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
          rows={3}
          placeholder="Any details you want to share before the appointment..."
        ></textarea>
      </details>

      </div>

      {/* Payment Method */}
      <div className="sm:flex flex-1/2 flex-col">
      <div className="bg-white border-gray-400 border-1 rounded-xl shadow-md p-4 mb-6 space-y-2 max-h-50">
        <p className="font-bold">Payment Method</p>
        <div className="space-y-3">
          {["gpay", "card", "upi"].map((method) => (
            <label key={method} className="flex font-semibold items-center gap-3">
              <input
                type="radio"
                name="payment"
                value={method}
                checked={paymentMethod === method}
                onChange={() => setPaymentMethod(method)}
                className="accent-blue-600"
              />
              {method === "gpay" && "Google Pay"}
              {method === "card" && "Credit/Debit Card"}
              {method === "upi" && "UPI"}
            </label>
          ))}
        </div>
      </div>

      {/* Bill Details */}
      <div className="bg-white border-gray-400 border-1 rounded-xl shadow-md p-4 mb-6 max-h-58">
        <p className="font-bold mb-2">Bill Details</p>
        <div className="text-sm space-y-1">
          <div className="flex justify-between"><span>Consultation Fee</span><span>{dr.fees}</span></div>
          <div className="flex justify-between"><span>Service Charge</span><span>₹20</span></div>
          <div className="flex justify-between text-green-600"><span>Discount</span><span>-₹10</span></div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold text-base"><span>Total Amount</span><span>₹310</span></div>
        </div>
      </div>
      
      
      {/* Pay Button */}
      <button onClick={handleConfirmBooking} className="w-full max-h-12 text-white py-3 rounded-xl font-semibold bg-blue-700 hover:bg-blue-800 transition">
         Pay ₹310 with {paymentMethod}
      </button>
      </div>
    </div>
    </div>
  );
}

export default CheckoutPage;
