import * as pouch from 'pouchdb-browser';
import { AuthDB } from '../utils/authDB';

export class UserDB {
    private remoteDB: AuthDB;
    private static instance: UserDB;

    constructor() {
        this.remoteDB = new pouch(
            process.env.CLOUDANT_DB_URL,
            {
                skip_setup: true
            }
        ) as AuthDB;
    }

    private static Instance(): UserDB {
        if (this.instance) {
            return this.instance;
        } else {
            this.instance = new this();
            return this.instance;
        }
    }

    public static login(username: string, password: string):
        Promise<PouchDB.Core.BasicResponse> {
        return UserDB.Instance().remoteDB.logIn(username, password);
    }
    public static logout() {
        return UserDB.Instance().remoteDB.logOut();
    }

    public static register(name: string, password: string) {
        return UserDB.Instance().remoteDB.signUp(name, password);
    }
}