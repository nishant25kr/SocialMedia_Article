import conf from "../conf/conf";
import { Client, Account, Id } from "appwrite"

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(Id.unique(), email, password, name)
            if (userAccount) {
                //call another method
                return this.login({ email, password })
                // return userAccount
            } else {
                return userAccount;
            }

        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error
        }
    }

    async currentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Error in currentUser", error)
        }
        //if there is a error or user is not login
        return null
    }

    async logout({ email, password }) {
        try {
            await this.account.deleteSession()
        } catch (error) {
            console.log("Error in logout :", error)
        }
    }

}

const authService = new AuthService();

export default AuthService;