import { current } from "@reduxjs/toolkit";
import conf from "../conf/conf";
import { Client, Account, ID, Databases, Query } from "appwrite";


const DATABASE_ID = conf.appwriteDatabaseID;
const USER_COLLECTION_ID = conf.appwriteUserCollectionID;
const DOCTOR_COLLECTION_ID = conf.appwriteDoctorCollectionID;

export class AuthService{
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID);
        this.account = new Account(this.client);
        this.database = new Databases(this.client);

    }
    

    async createAccount({ email, password, name, role, specialization, fees }) {
    try {
    const userAccount = await this.account.create(ID.unique(), email, password, name);

        if (userAccount) {
        const session = await this.login({ email, password });
        const currentUser = await this.account.get();

        if (role === "doctor") {
          await this.database.createDocument(
          DATABASE_ID,
          DOCTOR_COLLECTION_ID,
          currentUser.$id, // documentId = auth id
          {
            name,
            email,
            specialization,
            fees,
            isApproved: false,
          }
        );
        } else {
        await this.database.createDocument(
          DATABASE_ID,
          USER_COLLECTION_ID,
          currentUser.$id,
          {
            name,
            email,
          }
        );
      }
      return session;
    }
    return userAccount;
    } catch (error) {
    console.error("Error creating account:", error);
    throw error;
  }
}


    async login({email, password}) {
        try {
            const session = await this.account.createEmailPasswordSession(email, password);
            return session; // Return the session object if login is successful
        }
        catch (error) {
            console.error("Error logging in:", error);
            throw error;
        }
    }

    async getCurrentUser() {
    try {
    const account = await this.account.get();

    // Try admin first
    try {
      const adminDoc = await this.database.getDocument(DATABASE_ID, ADMIN_COLLECTION_ID, account.$id);
      return { ...account, role: "admin", ...adminDoc };
    } catch {}

    // Then try doctor
    try {
      const doctorDoc = await this.database.getDocument(DATABASE_ID, DOCTOR_COLLECTION_ID, account.$id);
      return { ...account, role: "doctor", ...doctorDoc };
    } catch {}

    // Then try user
    try {
      const userDoc = await this.database.getDocument(DATABASE_ID, USER_COLLECTION_ID, account.$id);
      return { ...account, role: "user", ...userDoc };
    } catch {}

    // If no document found in any collection
    return { ...account, role: null };
    } catch (err) {
    console.error("Error fetching current user:", err);
    return null;
    }
}

    async createUserDocument({name,email}){
        try {
            const currentUser = await this.account.get();
            await this.database.createDocument(
            DATABASE_ID,
            USER_COLLECTION_ID,
            currentUser.$id, // ✅ same ID as auth
            {
              name: name,
              email: email,
            }
        );
        } catch (error) {
            console.log("Error in creating User Link", error);
            
        }
     
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        }
        catch (error) {
            console.error("Error logging out:", error);
        }
    }

    async updateDocument({email, name,phone, gender, dob, address}) {

    try {
        const currentUser = await this.account.get()
        await this.database.updateDocument(
        DATABASE_ID, 
        USER_COLLECTION_ID,
        currentUser.$id, // documentId
        {
            phone: phone,
            gender: gender,
            dob: dob,
            address: address,
            // profilepic : profilepic,
            email: email,
            name: name
            //isVerified : this.verification
        }, 
        )
        }   catch (error) {
            console.log("Error in creating User Link", error);
            
        }
    }

    async verification({email}){
        try {
            const verifyUser = await this.account.createVerification(email);
            return verifyUser;
        }
        catch (error){
            console.log("verification error",error);
            
        }
        }   

    async getDetails() {
        try {
            const currentUser = await this.account.get()
            const details = await this.database.getDocument(
                DATABASE_ID,
                USER_COLLECTION_ID,
                currentUser.$id,
                [
                    Query.select(["name", "email", "phone", "address", "dob", "gender"])
                ]
            )
            return details;
        }
        catch(error){
            console.log("error", error);
            
        }
    }
    
    async getDoctorDetails() {
    try {
        const currentUser = await this.account.get();
        const details = await this.database.getDocument(
            DATABASE_ID,
            DOCTOR_COLLECTION_ID,
            currentUser.$id,
            [Query.select(["name", "email", "specialization", "fees", "isApproved"])]
        );
        return details;
        } catch (error) {
        console.log("error", error);
        }
    }

    async updateDoctorProfile({ name, email, specialization, fees }) {
        try {
            const currentUser = await this.account.get();
            await this.database.updateDocument(
                DATABASE_ID,
                DOCTOR_COLLECTION_ID,
                currentUser.$id,
                {
                    name,
                    email,
                    specialization,
                    fees,
                }
            );
        } catch (error) {
                console.log("Error updating doctor profile", error);
        }
    }

    


}

const authService = new AuthService();
export default authService;