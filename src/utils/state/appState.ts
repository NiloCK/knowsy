class appState {
    loggedIn: boolean = false;
    user: User;
}

class User {
    username: string = "AnonymousUser";
    roles?: string[];
}

const enum Actions {
    LOGIN
}

class Action {
    type: Actions;
    data: {};
}

function login(username: string, password: string) {

}