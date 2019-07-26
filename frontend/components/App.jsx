import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './sessions/login_form_container'; 
import SignupFormContainer from './sessions/signup_form_container';
import { AuthRoute } from '../util/route_util';
import BenchIndexContainer from './bench_index_container'


const App = () => (
  <div>
    <h2>Bench BnB from app.jsx</h2>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />

    <Route exact path="/" component={BenchIndexContainer} />
  </div>
);

export default App;