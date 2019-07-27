import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, token, ...props }) => {
  return (
    <Route
      {...props}
      render={renderProps =>
        token ? (
          <Component {...renderProps} />
        ) : (
          <Redirect to={{ pathname: '/' }} />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  token: PropTypes.string,
};

PrivateRoute.defaultProps = {
  token: null,
};

export default PrivateRoute;
