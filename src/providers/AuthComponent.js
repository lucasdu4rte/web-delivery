import React, { createContext, useState } from "react";

// const { Provider, Consumer } = React.createContext();

const { Consumer, Provider } = createContext({
  token: null,
  user: null,
  setToken: message => { },
  setUser: () => { },
})

export const AuthConsumer = Consumer

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null)

  const value = {
    token,
    setToken,
    user,
    setUser
  }

  return <Provider value={value}>{children}</Provider>;
};
