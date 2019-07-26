import { RECEIVE_CURRENT_USER} from '../actions/session_actions'
import {merge} from 'lodash';

export const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    // debugger;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, {[action.user.id]: action.user.email});
        default: 
            return oldState;
    }
}