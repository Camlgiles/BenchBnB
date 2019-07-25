import {
    RECEIVE_CURRENT_USER,
    RECEIVE_ERRORS
} from '../actions/session_actions';
const _nullErrors = {
    errors: null
};

export const sessionErrors = ( oldState = _nullErrors, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return merge({}, oldState, { errors: action.errors })
        case RECEIVE_CURRENT_USER:
            return _nullErrors;
        default:
            return oldState;
    }
}

