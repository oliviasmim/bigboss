import { createContext, useContext, useEffect } from "react";
import api from "../services/api";

export const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const { services, setServices } = useContext([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await api.get("services");
      setServices(response.data);
    };

    fetchServices();
  }, []);

  return (
    <ServicesContext.Provider
      value={{
        services,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};
