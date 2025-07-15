// doctorService.js
import { Client, Databases } from "appwrite";
import conf from "../conf/conf";

const DATABASE_ID = conf.appwriteDatabaseID;
const DOCTOR_COLLECTION_ID = conf.appwriteDoctorCollectionID;

class DoctorService {
  constructor() {
    this.client = new Client()
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectID);

    this.database = new Databases(this.client);
  }

  async drList() {
    try {
      const res = await this.database.listDocuments(DATABASE_ID, DOCTOR_COLLECTION_ID);
      return res; // ✅ must return this
    } catch (error) {
      console.error("Error fetching doctor list:", error);
      return { documents: [] }; // fallback
    }
  }

  async getDoctorById(id) {
    
    return await this.database.getDocument(DATABASE_ID, DOCTOR_COLLECTION_ID, id);
  }

  async updateDoctorProfile(id, data) {
    return await this.database.updateDocument(DATABASE_ID, DOCTOR_COLLECTION_ID, id, data);
  }
}

const doctorService = new DoctorService();
export default doctorService;
