import { userConstants } from '../constants'
import { UserDB } from '../../services/db';
import { Dispatch } from 'redux';


export const userActions = {
    login,
    logout,
    register
    //     getAll,
    //     delete: _delete
}

function login(username: string, password: string) {
    return (dispatch: Dispatch<{ username: string, password: string }>) => {
        dispatch(request({ name: username }));

        UserDB.login(username, password).then(
            (response: PouchDB.Core.BasicResponse) => {
                if (response.ok) {
                    dispatch(
                        success(
                            {
                                name: username
                            }
                        )
                    );
                } else {
                    dispatch(
                        failure(
                            {
                                name: username
                            }
                        )
                    )
                }
            }
        )
    }

    function request(user: { name: string }) {
        return {
            type: userConstants.LOGIN_REQUEST,
            user
        }
    }
    function success(user: { name: string }) {
        return {
            type: userConstants.LOGIN_SUCCESS,
            user
        }
    }
    function failure(error: { name: string }) {
        return {
            type: userConstants.LOGIN_FAILURE,
            error
        }
    }
}

function logout() {
    UserDB.logout();
    return { type: userConstants.LOGOUT };
}

function register(name: string, password: string) {

}