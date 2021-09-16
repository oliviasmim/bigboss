import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { useAuthenticated } from "../authentication";

const UserServicesContext = createContext();

export const UserServicesProvider = ({ children }) => {
  const [userServices, setUserServices] = useState([]);
  const [reloadUserServices, setReloadUserServices] = useState(false);
  const { userId, token } = useAuthenticated();
  const [currentService, setCurrentService] = useState({});

  useEffect(() => {
    if (userId) {
      api
        .get(`services/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setUserServices(res.data))
        .catch((err) => console.log(err));
    } else {
      setUserServices({});
    }
  }, [reloadUserServices, token, userId]);

  const updateUserServices = () => {
    setReloadUserServices(!reloadUserServices);
  };

  const handleIdService = (id, callback) => {
    const currentService = userServices.find((service) => service.id === id);
    setCurrentService(currentService);
    callback();
  };
  return (
    <UserServicesContext.Provider
      value={{
        userServices,
        updateUserServices,
        handleIdService,
        currentService,
      }}
    >
      {children}
    </UserServicesContext.Provider>
  );
};

export const useUserServices = () => useContext(UserServicesContext);
