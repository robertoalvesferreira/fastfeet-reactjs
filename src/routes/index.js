import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/dashboard';
import SignUp from '../pages/SignUp';
import Courier from '../pages/Courier';
import Recipient from '../pages/Recipient';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/recipient" component={Recipient} isPrivate />
      <Route path="/courier" component={Courier} isPrivate />
    </Switch>
  );
}
