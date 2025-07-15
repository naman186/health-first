const conf = {
    appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteClinicID: String(import.meta.env.VITE_APPWRITE_CLINIC_COLLECTION_ID),
    appwriteTimeSlotsID: String(import.meta.env.VITE_APPWRITE_TIME_SLOTS_COLLECTION_ID),
    appwriteUserCollectionID: String(import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID), 
    appwriteDoctorCollectionID: String(import.meta.env.VITE_APPWRITE_DOCTOR_COLLECTION_ID), 
    appwriteAppointmentCollectionID: String(import.meta.env.VITE_APPWRITE_APPOINTMENT_COLLECTION_ID),
    appwritePrescriptionCollectionID: String(import.meta.env.VITE_APPWRITE_PRESCRIPTION_COLLECTION_ID),
    appwriteBucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf