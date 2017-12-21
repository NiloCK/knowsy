import { modalConstants } from '../constants'
import { Action } from 'redux';

export const loginModalActions = {
    openLoginModal,
    closeLoginModal
}

function openLoginModal(): Action {
    return {
        type: modalConstants.OPEN_LOGINMODAL
    }
}
function closeLoginModal(): Action {
    return {
        type: modalConstants.CLOSE_LOGINMODAL
    }
}