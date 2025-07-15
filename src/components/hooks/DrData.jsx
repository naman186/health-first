import { useState, useEffect } from 'react'
import doctorService from '../../appwrite/doctorService';
import { useParams } from 'react-router-dom';

export default function useDrData(id) {

    const [dr, setDr] = useState({})

    useEffect(()=>{
        const fetchDoctor = async() => {
          try{
            const drData = await doctorService.getDoctorById(id)
            setDr(drData);
          }
          catch (error) {
            console.log("error fetching doctor data", error);
          }
          }
    
        if(id){fetchDoctor()};
      }, [id]);

  return dr;
}
