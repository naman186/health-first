import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID);
        this.account = new Account(this.client);

    }

    async createAccount({email, password, name}) {
        try {                    //await use krenge taaki pehle account create ho jaye
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                //if account is created successfully
                return this.login({email, password}); // Automatically log in the user after account creation 
            }
            else{
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
            const session = await this.account.createEmailSession(email, password);
            return session; // Return the session object if login is successful
        }
        catch (error) {
            console.error("Error logging in:", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            return user;
        }
        catch (error) {
            console.error("Error fetching current user:", error);
        }
        return null; // Return null if no user is logged in
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        }
        catch (error) {
            console.error("Error logging out:", error);
        }
    }
            
    
}

const authService = new AuthService();
export default authService;