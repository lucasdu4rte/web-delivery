import React from 'react';
import GlobalStyles from 'styles/global';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import store from 'store';

import Routes from 'routes';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Routes />
    </Provider>
  );
}

export default App;
