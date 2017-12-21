import { combineReducers } from 'redux';
import { RootState } from '../store';

import { modal } from './loginModal';
import { registration } from './registration';

const rootReducer = combineReducers<RootState>(
    {
        loginModal: modal
    }
);

export default rootReducer;