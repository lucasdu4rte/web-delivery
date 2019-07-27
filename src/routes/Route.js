import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const RouteWrapper = ({ component: Component, isPrivate, ...rest }) => {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to={{ pathname: '/' }} />;
  }

  if (signed && !isPrivate) {
    return <Redirect to={{ pathname: '/pedidos' }} />;
  }

  return <Route {...rest} component={Component} />;
};

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isPrivate: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
