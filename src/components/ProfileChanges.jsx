import Inputx from "./input"
import { useState, useEffect } from "react"
import { set, useForm } from 'react-hook-form'
import authService from "../appwrite/auth"


function ProfileChanges() {

    const [error, setError] = useState('')
    const { register, handleSubmit, setValue, formState:{errors} } = useForm()
    
     const updateProfile = async (data) => {
       setError("")
       try{
        const updateData = await authService.updateDocument(data)
        if(updateData){
          alert("hogya re hogya")
        }
      }
        catch(err){
          console.log("Error", err);
        }
      }

      useEffect(() => {
        const fetchData = async () => {
          try {
            const user = await authService.getDetails();
            if (user) {
              setValue("name", user.name);
              setValue("email", user.email);
              const formatDOB = new Date(user.dob).toISOString().split("T")[0];
              setValue("dob", formatDOB); // custom field agar stored hai
              setValue("phone", user.phone);
              setValue("address", user.address);
              setValue("gender", user.gender);
            }
          } catch (err) {
            console.error("Failed to load user data", err);
          }
        };
      
        fetchData();
      }, []);


     //{error && <p className="text-red-500 text-sm">{error}</p>}
    
    return (
          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
            
            <form onSubmit={handleSubmit(updateProfile)} > 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div>
                <Inputx label ="Full Name" type="text" placeholder="Your Full Name" {...register("name",
                {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters required",
                  },
                  maxLength: {
                    value: 15,
                    message: "Maximum 15 characters allowed",
                  },
                } 
                )}
                error={errors.name}
                />
               
              </div>
              <div>
                <label className="block text-sm">Gender</label>
                <select type="string" className="input w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring focus:ring-blue-300" {...register("gender")}>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <Inputx
                label="Date of Birth"
                type="date"
                {...register("dob", {
                  required: "Date of birth is required",
                  validate: {
                    isAtLeast13: (value) => {
                      const birthDate = new Date(value);
                      const today = new Date();
                      let age = today.getFullYear() - birthDate.getFullYear();
                      const m = today.getMonth() - birthDate.getMonth();
                      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                        age--;
                      }
                      return age >= 13 || "You must be at least 13 years old";
                    },
                  },
                })}
                error={errors.dob}
                />


              </div>
              <div>
                <Inputx label="Phone Number" type="string" placeholder="Your Phone Number" {...register("phone", {
                  required: "Phone no. is required",
                  minLength: {
                    value: 10,
                    message: "Minimum 10 characters required",
                  },
                  maxLength: {
                    value: 10,
                    message: "Maximum 10 characters allowed",
                  },
                } 
                )}
                error={errors.phone} />
              </div>
              <div>
                <Inputx label ="E-mail" type="email" placeholder="Your E-mail" {...register("email",{
                required: "Email is required",
                pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 
                message: "Please enter a valid email address",
                }
                }
                )}
                error={errors.email} 
                /> 
              </div>
              {/* <div>
                <Inputx label = "Emergency Contact" type="string" placeholder="Emergency Contact" {...register("")}/>
              </div> */}
              <div className="md:col-span-2">
                <label className="block text-sm">Address</label>
                <textarea className="input w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring focus:ring-blue-300" placeholder="Enter your full address"
                 {...register("address",
                 {
                  required: "Address is required",
                  minLength: {
                    value: 10,
                    message: "Minimum 10 characters required",
                  },
                  maxLength: {
                    value: 300,
                    message: "Maximum 300 characters allowed",
                  },
                } 
                )}
                ></textarea>
                {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
              </div>
            </div>
            <button type="submit" className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full sm:w-auto">
              Save Changes
            </button>
            </form>
          </div>
        );
}
export default ProfileChanges;