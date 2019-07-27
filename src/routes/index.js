import React from 'react';
import { Router, Switch } from 'react-router-dom';
import Signin from 'pages/auth/signin';
import Orders from 'pages/orders';

import history from 'services/history';
import Route from './Route';

const AllRoutes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route isPrivate path="/pedidos" component={Orders} />
    </Switch>
  </Router>
);

export default AllRoutes;
