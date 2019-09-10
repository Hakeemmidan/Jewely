import React from 'react';
import { AuthRoute } from '../util/route_util';

import { Switch } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './auth/signup_form_container';
import LogInFormContainer from './auth/login_form_container';

export const App = () => (
  <div>
    <header>
      <a className="logo" href="#">Jewely</a>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      {/* task: Clicking on something that has no route should re-locate the user to the home page */}
    </Switch>
  </div>
);