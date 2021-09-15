import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { useAuthenticated } from "../authentication";

const UserContractsContext = createContext();

export const UserContractsProvider = ({ children }) => {
	const [userContracts, setUserContracts] = useState([]);
	const [reloadUserContracts, setReloadUserContracts] = useState(false);
	const { userId, token } = useAuthenticated();

	useEffect(() => {
		if (userId) {
			api.get(`contracts/user/${userId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
				.then((res) => setUserContracts(res.data))
				.catch((err) => console.log(err));
		} else {
			setUserContracts({});
		}
	}, [reloadUserContracts, token, userId]);

	const updateUserContracts = () => {
		setReloadUserContracts(!reloadUserContracts);
	};
	return (
		<UserContractsContext.Provider value={{ userContracts, updateUserContracts }}>
			{children}
		</UserContractsContext.Provider>
	);
};

export const useUserContracts = () => useContext(UserContractsContext);
