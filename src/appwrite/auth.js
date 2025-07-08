import { current } from "@reduxjs/toolkit";
import conf from "../conf/conf";
import { Client, Account, ID, Databases, Query } from "appwrite";


const DATABASE_ID = conf.appwriteDatabaseID;
const COLLECTION_ID = conf.appwriteCollectionID;

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
    

    async createAccount({email, password, name}) {
        try {                    //await use krenge taaki pehle account create ho jaye
            const userAccount = await this.account.create(ID.unique(), email, password, name);
                if (userAccount) {//if account is created successfully
                    const session =  await this.login({email, password}); // Automatically log in the user after account creation 
                    await this.createUserDocument({email, name})
                    return session;
                } else {
                    return userAccount;
                }
        }
        catch (error) {
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
            console.log("it is used")
            const user = await this.account.get();
            return user;
        }
        catch (error) {
            console.error("Error fetching current user:", error);
        }
        return null; // Return null if no user is logged in
    }

    
    async createUserDocument({name,email}){
        try {
            const currentUser = await this.account.get();
            await this.database.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
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
        COLLECTION_ID,
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
                COLLECTION_ID,
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
     
}

const authService = new AuthService();
export default authService;