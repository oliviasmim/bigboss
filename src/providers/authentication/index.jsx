import { createContext, useContext, useEffect, useState } from "react";

const AutheticationContext = createContext();

export const AutheticationProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem("@BigBoss/users"));

    if (accessToken) {
      setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <AutheticationContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AutheticationContext.Provider>
  );
};

export const useAuthenticated = () => useContext(AutheticationContext);
