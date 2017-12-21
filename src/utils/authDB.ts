import * as pouch from 'pouchdb-browser';

pouch.plugin(
    require('pouchdb-authentication')
);

interface UserContext {
    name: string;
    roles?: string[];
}

interface User extends UserContext {
}

interface LoginResponse extends PouchDB.Core.BasicResponse, UserContext {
}

interface SessionResponse extends PouchDB.Core.BasicResponse {
    info: {
        authenticated: string;
        authentication_db: string;
        authentication_handlers: string[];
    };
    userCtx: UserContext;
}

interface PutUserOptions extends PouchDB.Core.Options {
    metadata?: any;
    roles?: string[];
}

export interface AuthDB extends PouchDB.Database {
    /**
     * Log in an existing user.
     * Throws an error if the user doesn't exist yet, the password is wrong, the HTTP server is unreachable, or a meteor struck your computer.
     */
    logIn(username: string, password: string,
        callback: PouchDB.Core.Callback<LoginResponse>): void;

    logIn(username: string, password: string,
        options: PouchDB.Core.Options,
        callback: PouchDB.Core.Callback<LoginResponse>): void;

    logIn(username: string, password: string,
        options?: PouchDB.Core.Options): Promise<LoginResponse>;

    /**
     * Logs out whichever user is currently logged in.
     * If nobody's logged in, it does nothing and just returns `{"ok" : true}`.
     */
    logOut(callback: PouchDB.Core.Callback<PouchDB.Core.BasicResponse>): void;

    logOut(): Promise<PouchDB.Core.BasicResponse>;

    /**
     * Returns information about the current session.
     * In other words, this tells you which user is currently logged in.
     */
    getSession(callback: PouchDB.Core.Callback<SessionResponse>): void;

    getSession(): Promise<SessionResponse>;

    /**
     * Sign up a new user who doesn't exist yet.
     * Throws an error if the user already exists or if the username is invalid, or if some network error occurred.
     * CouchDB has some limitations on user names (e.g. they cannot contain the character `:`).
     */
    signUp(username: string, password: string,
        callback: PouchDB.Core.Callback<PouchDB.Core.Response>): void;

    signUp(username: string, password: string,
        options: PutUserOptions,
        callback: PouchDB.Core.Callback<PouchDB.Core.Response>): void;

    signUp(username: string, password: string,
        options?: PutUserOptions): Promise<PouchDB.Core.Response>;

    /**
     * Returns the user document associated with a username.
     * (CouchDB, in a pleasing show of consistency, stores users as JSON documents in the special `_users` database.)
     * This is the primary way to get metadata about a user.
     */
    getUser(username: string,
        callback: PouchDB.Core.Callback<PouchDB.Core.Document<{} & User> & PouchDB.Core.GetMeta>): void;

    getUser(username: string,
        options: PouchDB.Core.Options,
        callback: PouchDB.Core.Callback<PouchDB.Core.Document<{} & User> & PouchDB.Core.GetMeta>): void;

    getUser(username: string,
        options?: PouchDB.Core.Options): Promise<PouchDB.Core.Document<{} & User> & PouchDB.Core.GetMeta>;

    /**
     * Update the metadata of a user.
     */
    putUser(username: string,
        callback: PouchDB.Core.Callback<PouchDB.Core.Response>): void;

    putUser(username: string, options: PutUserOptions,
        callback: PouchDB.Core.Callback<PouchDB.Core.Response>): void;

    putUser(username: string, options?: PutUserOptions): Promise<PouchDB.Core.Response>;

    /**
     * Delete a user.
     */
    deleteUser(username: string,
        callback: PouchDB.Core.Callback<PouchDB.Core.Response>): void;

    deleteUser(username: string,
        options: PouchDB.Core.Options,
        callback: PouchDB.Core.Callback<PouchDB.Core.Response>): void;

    deleteUser(username: string,
        options?: PouchDB.Core.Options): Promise<PouchDB.Core.Response>;

    /**
     * Set new `password` for user `username`.
     */
    changePassword(username: string, password: string,
        callback: PouchDB.Core.Callback<PouchDB.Core.Response>): void;

    changePassword(username: string, password: string,
        options: PouchDB.Core.Options,
        callback: PouchDB.Core.Callback<PouchDB.Core.Response>): void;

    changePassword(username: string, password: string,
        options?: PouchDB.Core.Options): Promise<PouchDB.Core.Response>;

    /**
     * Renames `oldUsername` to `newUsername`.
     */
    changeUsername(oldUsername: string, newUsername: string,
        callback: PouchDB.Core.Callback<PouchDB.Core.Response>): void;

    changeUsername(oldUsername: string, newUsername: string,
        options: PouchDB.Core.Options,
        callback: PouchDB.Core.Callback<PouchDB.Core.Response>): void;

    changeUsername(oldUsername: string, newUsername: string,
        options?: PouchDB.Core.Options): Promise<PouchDB.Core.Response>;

    /**
     * Sign up a new admin.
     */
    signUpAdmin(username: string, password: string,
        callback: PouchDB.Core.Callback<string>): void;

    signUpAdmin(username: string, password: string,
        options: PutUserOptions,
        callback: PouchDB.Core.Callback<string>): void;

    signUpAdmin(username: string, password: string,
        options?: PutUserOptions): Promise<string>;

    /**
     * Delete an admin.
     */
    deleteAdmin(username: string,
        callback: PouchDB.Core.Callback<string>): void;

    deleteAdmin(username: string, options: PouchDB.Core.Options,
        callback: PouchDB.Core.Callback<string>): void;

    deleteAdmin(username: string, options?: PouchDB.Core.Options): Promise<string>;
}
