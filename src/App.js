import React from "react";
import GlobalStyles from "styles/global";

import Routes from "routes";
import { AuthProvider } from "providers/AuthComponent";

function App() {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}

export default App;
