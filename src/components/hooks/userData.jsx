import React from 'react'
import { useEffect, useState } from 'react';
import authService from '../../appwrite/auth';

export default function useUserData() {

    const [userData, setUserData] = useState({})

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const fetchedUser = await authService.getDetails();
            if (fetchedUser) {
                setUserData(fetchedUser);
            }
        } catch (error){
            console.log("Error in fetching user", error);
        }
    }; fetchUserData();
    },[]
    )

    
  return userData
}
