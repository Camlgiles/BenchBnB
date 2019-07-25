import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './sessions/login_form_container'; 
import SignupFormContainer from './sessions/signup_form_container';


const App = () => (
  <div>
    <h2>Bench BnB from app.jsx</h2>

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;