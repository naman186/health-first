// databaseService.js
import { Client, Databases,Query, ID } from "appwrite";
import conf from "../conf/conf";
import Appointments from "../components/container/Appointments";

const DATABASE_ID = conf.appwriteDatabaseID;
const DOCTOR_COLLECTION_ID = conf.appwriteDoctorCollectionID;
const USER_COLLECTION_ID = conf.appwriteUserCollectionID;
const APPOINTMENT_COLLECTION_ID = conf.appwriteAppointmentCollectionID;
const TIME_SLOTS_COLLECTION_ID = conf.appwriteTimeSlotsID;
const CLINIC_COLLECTION_ID = conf.appwriteClinicID;


class DatabaseService {
  constructor() {
    this.client = new Client()
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectID);

    this.database = new Databases(this.client);
  }

  async createAppointment(appointmentData){
    try {
        const appointment = await this.database.createDocument(
            DOCTOR_COLLECTION_ID,
            USER_COLLECTION_ID,
            APPOINTMENT_COLLECTION_ID,
            ID.unique(),
            appointmentData
        );
        return appointment;

    } catch (error) {
        console.log(error);
        
    }
  }

  async listAppointments(){
    try {
        const existing = await this.database.listDocuments(
        DATABASE_ID,
        APPOINTMENT_COLLECTION_ID,
      [
        Query.equal("doctor", doctors),
        Query.equal("clinic", clinic),
        Query.equal("DateTime", timeSlots),
      ]
    );
    return existing.documents;
        
    } catch (error) {
        console.log(error);
        
    }
  }

}

const databaseService = new DatabaseService();
export default databaseService;
