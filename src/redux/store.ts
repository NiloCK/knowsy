import { createStore, combineReducers } from 'redux';
import rootReducer from './reducers';
import { Store } from 'react-redux';
import { modal } from './reducers/loginModal';

export interface RootState {
    currentUser: null | User;
    loginModal: LoginModalState
}

export interface LoginModalState {
    active: boolean,
    registrationMode: boolean
}

export const initialState: RootState = {
    currentUser: null,
    loginModal: {
        active: false,
        registrationMode: false
    }
}

let localRootReducer = combineReducers<RootState>({
    loginModal: modal
})

export const store: Store<RootState> = createStore<RootState>(
    // rootReducer, // TypeError: __WEBPACK_IMPORTED_MODULE_1__store__.a is undefined
    localRootReducer, // works
    initialState);