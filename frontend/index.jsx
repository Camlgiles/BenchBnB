import React from 'react';
import ReactDOM from 'react-dom';
import {logIn, logOut, signUp} from './util/session';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
    window.logIn = logIn;
    window.logOut = logOut;
    window.signUp = signUp;
    window.getState = store.getState;
    window.dispatch = store.dispatch; 
});

