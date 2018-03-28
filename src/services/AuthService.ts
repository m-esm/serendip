import { UserModel } from "../models";
import { Collection, ObjectID } from "mongodb";
import { DbService  } from ".";
import { ServerServiceInterface, Server } from "../core";



export class AuthService implements ServerServiceInterface {


    static dependencies = ["DbService", "EmailService", "SmsService"];

    private _dbService : DbService;

    async start() {

       this._dbService = Server.services["DbService"];

       this._dbService.collection("Users");
    }


    public test(){

        return 'test';
    }
    // private userDb: DbService<UserModel>;

    // private createRandomToken(length: number): string {

    //     return Math.random().toString().split('.')[1].substring(0, length);

    // }

    // constructor() {

    //     this.userDb = new DbService<UserModel>(DbCollectionNames.Users);

    // }

    // public allUsers() {

    //     return this.userDb.find({});

    // }

    // public findUserById(userId: string): Promise<UserModel> {

    //     var objectId = new ObjectID(userId);

    //     return this.userCollection.findOne({ _id: objectId });

    // }

    // public findUserByMobile(mobile: string): Promise<UserModel> {

    //     return this.userCollection.findOne({ mobile: mobile });

    // }



    // public findUserByEmail(email: string): Promise<UserModel> {

    //     return this.userCollection.findOne({ email: email });

    // }


    // public async createPasswordResetToken(userId: string): Promise<string> {


    //     var token = this.createRandomToken(6);
    //     var objectId = new ObjectID(userId);


    //     await this.userCollection.findOneAndUpdate({ _id: objectId }, { "passwordResetToken": token });

    //     return token;


    // }

    // public static sendPasswordResetTokenWith(sendEmail: boolean, sendSms: boolean) {



    // }


    // public static changePassword(newPassword: string) {


    // }

    // public static lockAccount() {

    // }

    // public static unlockAccount() {

    // }
}
