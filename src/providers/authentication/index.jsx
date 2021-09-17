import { createContext, useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const AutheticationContext = createContext();

export const AutheticationProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@BigBoss/users")) || ""
  );
  const [userId, setUserId] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const accessToken =
      JSON.parse(localStorage.getItem("@BigBoss/users")) || "";

    if (accessToken) {
      setAuthenticated(true);
      setToken(accessToken);
      setUserId(jwt_decode(accessToken).sub);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated]);

  return (
    <AutheticationContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        token,
        userId,
        isLoading,
        setLoading,
      }}
    >
      {children}
    </AutheticationContext.Provider>
  );
};

export const useAuthenticated = () => useContext(AutheticationContext);
