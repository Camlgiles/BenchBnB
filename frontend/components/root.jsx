import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import App from './App';
import {Provider} from 'react-redux';
import GreetingContainer from './greeting/greeting_container';


const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <GreetingContainer />
            <h1>Hello from root.jsx</h1>
            <ul>
                <li><App /></li>
            </ul>
        </HashRouter>
    </Provider>
);

export default Root;

