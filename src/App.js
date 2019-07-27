import React from 'react';
import GlobalStyles from 'styles/global';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Routes from 'routes';
import { AuthProvider } from 'providers/AuthComponent';

import store from 'store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Provider>
  );
}

export default App;
