// import { userConstants } from '../constants';
import { Action, Reducer } from 'redux';
import { RootState, initialState } from '../store';

export const registration: Reducer<RootState> =
    (state: RootState = initialState, action: Action) => {
        return initialState;
    };

// export function registration(state: RootState = initialState, action: Action) {

//     switch (action.type) {
//         case userConstants.REGISTER_REQUEST:
//             return { registering: true };
//         case userConstants.REGISTER_SUCCESS:
//             return {};
//         case userConstants.REGISTER_FAILURE:
//             return {};
//         default:
//             return state;
//     }
// }