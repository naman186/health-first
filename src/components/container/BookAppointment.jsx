import { useEffect, useState } from "react";
import doctorService from "../../appwrite/doctorService";
import {useSelector} from "react-redux"
import {
  Link,
  Navigate,
  NavLink,
  useNavigate,
  useParams,
} from "react-router-dom";
import useDrData from "../hooks/DrData";
import { useDispatch } from "react-redux";
import {
  setBookingClinic,
  setBookingDoctor,
  setBookingSlot,
} from "../../store/databaseSlice";

const clinics = [
  {
    name: "City Health Clinic, Rajwada",
    distance: "1.4 km away",
    slots: ["09:30 AM", "11:00 AM", "01:00 PM", "03:30 PM", "05:00 PM"],
  },
  {
    name: "Aurobindo Hospital, Vijay Nagar",
    distance: "2.1 km away",
    slots: ["10:00 AM", "12:30 PM", "02:00 PM", "04:30 PM"],
  },
];

function BookAppointment() {
  const { id } = useParams();

  console.log(id);

  const [selectedClinic, setSelectedClinic] = useState();
  const [selectedSlot, setSelectedSlot] = useState();

  const dispatch = useDispatch();

  const dr = useDrData(id);
  console.log(dr);
  
  

  const [degre, setDegre] = useState([]);

  const Navigate = useNavigate();

  const handleSlotSelection = () => {
    dispatch(setBookingDoctor(dr));
    dispatch(setBookingClinic(dr.clinic.index));
    dispatch(setBookingSlot(dr.timeSlots.DateTime));
    Navigate(`/CheckoutPage/${id}`);
  };

  const bookingState = useSelector(state => state.booking);
console.log("Redux booking state:", bookingState);


  useEffect(() => {
    if (dr && Array.isArray(dr.degree)) {
      setDegre(dr.degree);
    } else {
      setDegre([]);
    }
  }, [dr]);

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
              <h1 className="text-2xl font-bold">Dr.{dr.name}</h1>
              <p className="text-gray-500">{dr.specialization}</p>
              <p className="text-sm mt-2 text-black font-semibold">
                {degre.map((deg, index) => (
                  <span className="mr-2" key={index}>
                    {deg}
                  </span>
                ))}{" "}
                • {dr.experience}+ years experience
              </p>
              <p className="text-sm mt-2 text-blue-600 italic font-bold">
                Fees: ₹{dr.fees}
              </p>
              <p className="text-sm mt-2 text-gray-600 font-semibold">
                Reviews:{" "}
              </p>
            </div>
            <button className="mt-4 w-max bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700">
              View Full Profile
            </button>
          </div>
        </div>

        {/* Date & Filters */}
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <div className="flex gap-4">
            <button className="px-4  bg-blue-100 text-blue-600 rounded-md font-medium">
              Today
            </button>
            <button className="px-4  bg-gray-200 rounded-md font-medium">
              Tomorrow
            </button>
            <button className="px-4  bg-gray-200 rounded-md font-medium">
              This Weekend
            </button>
          </div>
          <div className="flex gap-3 flex-wrap">
            <button className="text-sm bg-gray-200 px-3 py-1 rounded">
              Morning
            </button>
            <button className="text-sm bg-gray-200 px-3 py-1 rounded">
              Afternoon
            </button>
            <button className="text-sm bg-gray-200 px-3 py-1 rounded">
              Evening
            </button>
            <button className="text-sm bg-gray-200 px-3 py-1 rounded">
              Weekend Only
            </button>
          </div>
        </div>

        {/* Clinics and Slots */}
        {Array.isArray(dr?.clinic) &&
          dr.clinic.map((c, index) => (
            <div key={index} className={`bg-white shadow-md rounded-xl p-6`}>
              <div className="mb-4">
                <h2 className="text-lg font-semibold">{c.name}</h2>
                <p className="text-sm text-gray-500">{c.Address}</p>
              </div>

              {Array.isArray(dr?.timeSlots) && dr.timeSlots.length > 0 ? (
                <div className="flex flex-wrap gap-4 mt-4">
                  {dr.timeSlots.map((slot, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        dispatch(setBookingDoctor(dr));
                        setSelectedClinic(c);
                        setSelectedSlot(slot);
                        dispatch(setBookingClinic(c));
                        dispatch(setBookingSlot(slot));
                        Navigate(`/CheckoutPage/${id}`);
                      }}
                      className={`px-4 py-2 rounded-md border transition ${
                        selectedSlot?.$id === slot.$id &&
                        selectedClinic?.$id === c.$id
                          ? "bg-blue-600 text-white border-blue-700"
                          : "bg-gray-100 border-gray-300 hover:bg-blue-100 hover:border-blue-500"
                      }`}
                    >
                      {slot.DateTime.split("T")[1]}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-sm">No slots available</p>
              )}
            </div>
          ))}
      </div>
    </>
  );
}

export default BookAppointment;
/*<div className="space-y-8">
        {dr.clinic.map((c, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-6">
            <div className="mb-4">
              <h2 className="text-lg font-semibold">{c.name}</h2>
              <p className="text-sm text-gray-500">{c.Address}</p>
            </div>
            
          </div>
        ))}
      </div>*/
