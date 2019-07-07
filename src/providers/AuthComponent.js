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
  const tokenStorage = JSON.parse(localStorage.getItem('@Delivery:token'))
  const userStorage = JSON.parse(localStorage.getItem('@Delivery:user'))

  const [token, setToken] = useState(tokenStorage);
  const [user, setUser] = useState(userStorage)

  const value = {
    token,
    setToken,
    user,
    setUser
  }

  return <Provider value={value}>{children}</Provider>;
};
