import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  token,
  ...props
}) => {
  return (
    <Route
      {...props}
      render={renderProps =>
        token ? (
          <Component {...renderProps} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
};

export default PrivateRoute;
