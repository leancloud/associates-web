import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { Login } from 'containers/Login';
import { Logout } from 'containers/Logout';
import { Signup } from 'containers/Signup';
import { List } from 'containers/List';
import {requireAuthentication} from 'containers/AuthenticatedComponent';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="login" component={Login} />
    <Route path="logout" component={Logout} />
    <Route path="signup" component={Signup} />
    <Route path="list" component={requireAuthentication(List)} />
  </Route>
);
