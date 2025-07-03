import React from 'react'
import dr from "../assets/dr-img.svg"
import clinic1 from "../assets/clinic-1.png"
import clinic2 from "../assets/clinic-2.png"
import clinic3 from "../assets/clinic-3.png"

function Home() {
  return (
    <>
    <section >
        <div className="w-5/6 sm:container gap-5 mt-4 sm:mt-15 flex flex-col items-start mx-auto sm:w-3/5 sm:gap-8 overflow-hidden">
            <div className="heading text-2xl sm:text-4xl font-semibold">
            <h1>Welcome back, Sarah</h1>
            </div>
            <div className="search-bar w-full flex items-center border-1 rounded-xl px-3 py-2 " style={{ backgroundColor: "var(--second-gray-color)", borderColor: "var(--second-gray-color)" }}>
                <span>
                    <img src="https://img.icons8.com/ios-glyphs/30/6B7882/search--v1.png" alt="" /> 
                </span>
                <input 
                    type="text" 
                    placeholder='Search for a doctor or clinic' 
                    className=' w-full ml-2 outline-none'
                />
            </div>
            <button className=" text-black font-semibold px-6 py-2 rounded-lg " style={{ backgroundColor: "var(--button-color)" }}>
              Book an appointment
            </button>
            <h4 className="heading text-3xl font-semibold">Your upcoming appointments</h4>

            <div className="flex-col-reverse sm:appointments flex w-full justify-between">
                <div className="appo-text">
                    <p className="text-[#6B7882] leading-8">
                        Today, 10:00 AM
                    </p>
                    <h5 className="font-semibold">
                        Dr. G.D Bhadoriya
                    </h5>
                    <p className="text-[#6B7882] leading-8">
                        General Physican, 123 Medical Center
                    </p>
                </div>
                <div className="appo-img">
                    <img src={dr} alt="" />
                </div>
            </div>
            <h4 className="font-semibold text-3xl">Clinics near you</h4>
            <div className="clinics">
                <ul className="flex gap-5">
                    <li>
                        <div className="mb-4 h-42 w-64 border-2 border-transparent rounded-2xl bg-cover overflow-hidden">
                        <img src={clinic1} alt="" />
                        </div>
                        <p>Ramesh Mandloi</p>
                        <p>Open until 8 PM</p>
                    </li>
                    <li>
                        <div className="mb-4 h-42 w-64 border-2 border-transparent rounded-2xl bg-cover overflow-hidden">
                        <img src={clinic2} alt="" />
                        </div>
                        <p>Aurobindo Hospital</p>
                        <p>Open until 12 PM</p>
                    </li>
                    <li>
                        <div className="mb-4 h-42 w-64 border-2 border-transparent rounded-2xl bg-cover overflow-hidden">
                        <img src={clinic3} alt="" />
                        </div>
                        <p>M.Y Hospital</p>
                        <p>Open until 10 PM</p>
                    </li>
                    <li>
                        <div className="mb-4 h-42 w-64 border-2 border-transparent rounded-2xl bg-cover overflow-hidden">
                        <img src={clinic2} alt="" />
                        </div>
                        <p>JholaChhap Clinic</p>
                        <p>Open until 6 PM</p>
                    </li>
                </ul>
            </div>
            <div className="Specialists flex flex-col gap-5">
                <h4 className="text-3xl font-semibold">Specialists</h4>
                <ul className="flex gap-5">
                    <li>
                        <div className="mb-4 h-64 w-64 border-2 border-transparent rounded-2xl bg-cover overflow-hidden">
                        <img src="https://www.bombayhospitalindore.com/resources/assets/images/team/dr-abhinav-anand.jpg" alt=""/> 
                        </div>
                        <p>Gokuldham Clinic</p>
                        <p>Open until 8 PM</p>
                    </li>
                    <li>
                        <div className="mb-4 h-64 w-64 border-2 border-transparent rounded-2xl bg-cover overflow-hidden">
                        <img src="https://kdahweb-static.kokilabenhospital.com/kdah-2019/product/1729752538.jpg" alt="" /> 
                        </div>
                        <p>Aurobindo Hospital</p>
                        <p>Open until 12 PM</p>
                    </li>
                    <li>
                        <div className="mb-4 h-64 w-64 border-2 border-transparent rounded-2xl bg-cover overflow-hidden">
                        <img src="https://www.bombayhospitalindore.com/resources/assets/images/team/dr-ankit-gupta.jpg" alt="" />
                        </div>
                        <p>M.Y Hospital</p>
                        <p>Open until 10 PM</p>
                    </li>
                    <li>
                        <div className="mb-4 h-64 w-64 border-2 border-transparent rounded-2xl bg-cover overflow-hidden">
                        <img src="https://www.bombayhospitalindore.com/resources/assets/images/team/mrs-aashna-jain.jpg" alt="" />
                        </div>
                        <p>JholaChhap Clinic</p>
                        <p>Open until 6 PM</p>
                    </li>
                </ul>

            </div>

        </div>
    </section>
    </>
  )
}

export default Home