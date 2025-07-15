import { useState, useEffect } from "react";
import doctorService from "../../appwrite/doctorService";

export default function DrList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await doctorService.drList();
        setDoctors(res?.documents || []);
      } catch (err) {
        console.error("Failed to fetch doctors:", err);
      }
    };

    fetchDoctors();
  }, []);

  return doctors;
}