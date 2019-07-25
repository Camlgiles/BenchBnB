import * as ApiUtil from '../util/session';

export const RECEIVE_CURRENT_USER = " RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})


const receiveErrors = errors => ({
    type: RECEIVE_CURRENT_USER,
    errors
});


export const signup = formUser => dispatch => (ApiUtil.signUp(formUser)
    .then(user => dispatch(receiveCurrentUser(user))));

export const login = formUser => dispatch => (ApiUtil.logIn(formuser)
    .then(user => dispatch(receiveCurrentUser(user))));

export const logout = () => dispatch => (ApiUtil.logOut()
    .then(() => dispatch(logoutCurrentUser())));

// rootpage(rootcomponent(doesnt have url)-> render ->(formlogin / logout)->(submithandler) -> .ajax rquest to the back -> backrouter -> controller -> model 
//  database -> model -> contorller -> fronted store -> reducer 