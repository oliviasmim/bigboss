import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { useAuthenticated } from "../authentication";

const UserClientsContext = createContext();

export const UserClientsProvider = ({ children }) => {
	const [userClients, setUserClients] = useState([]);
	const [reloadUserClients, setReloadUserClients] = useState(false);
	const { userId, token } = useAuthenticated();

	useEffect(() => {
		console.log(userId)
        if (userId) {
			api.get(`clients/user/${userId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
				.then((res) => setUserClients(res.data))
				.catch((err) => console.log(err));
		} else {
			setUserClients({});
		}
	}, [reloadUserClients, token, userId]);

	const updateUserClients = () => {
		setReloadUserClients(!reloadUserClients);
	};
	return (
		<UserClientsContext.Provider value={{ userClients, updateUserClients }}>
			{children}
		</UserClientsContext.Provider>
	);
};

export const useUserClients = () => useContext(UserClientsContext);
