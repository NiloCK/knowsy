import { modalConstants } from '../constants'
import { RootState, initialState, LoginModalState } from '../store';
import { Action, Reducer } from 'redux';


// let modal: Reducer;

export const modal: Reducer<LoginModalState> =
    (state: LoginModalState = initialState.loginModal, action: Action) => {
        switch (action.type) {
            case modalConstants.OPEN_LOGINMODAL:
                return Object.assign({}, state, {
                    active: true
                });
            case modalConstants.CLOSE_LOGINMODAL:
                return Object.assign({}, state, {
                    active: false
                });
            case modalConstants.TOGGLE_REGISTRATION_MODE:
                return Object.assign({}, state, {
                    loginModal: {
                        registrationMode: !state.registrationMode
                    }
                });
            default:
                return state;
        }
    };

// export modal;

// export function modal(state: RootState, action: Action) {
//     switch (action.type) {
//         case modalConstants.OPEN_LOGINMODAL:
//             return {
//                 loginModal: {
//                     active: true
//                 }
//             } as RootState;
//         case modalConstants.CLOSE_LOGINMODAL:
//             return {
//                 loginModal: {
//                     active: false
//                 } as
//             }
//     }
// }