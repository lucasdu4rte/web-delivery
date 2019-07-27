import React from 'react';
import { Router, Switch } from 'react-router-dom';
import Signin from 'pages/auth/signin';
import Orders from 'pages/orders';
import { AuthConsumer } from 'providers/AuthComponent';
import history from 'services/history';
import Route from './Route';

const AllRoutes = () => (
  <Router history={history}>
    <Switch>
      <AuthConsumer>
        {props => (
          <>
            <Route
              exact
              path="/"
              component={routeProps => <Signin {...props} {...routeProps} />}
            />
            <Route
              isPrivate
              {...props}
              exact
              path="/pedidos"
              component={routeProps => <Orders {...props} {...routeProps} />}
            />
          </>
        )}
      </AuthConsumer>
    </Switch>
  </Router>
);

export default AllRoutes;
