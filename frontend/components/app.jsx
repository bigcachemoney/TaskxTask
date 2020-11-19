import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import Splash from './splash/splash';

// import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
      {/* <GreetingContainer /> */}

    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      {/* <ProtectedRoute exact path="/tasks/new" component={TaskFormContainer} /> */}
      {/* <Route path="/tasks/:taskid" component={TaskShowContainer} /> */}
      <Route path="/" component={Splash} />
    </Switch>

  </div>
);

export default App;
