import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { useAuthenticated } from "../authentication";

const UserInfosContext = createContext();

export const UserInfosProvider = ({ children }) => {
	const [userInfos, setUserInfos] = useState({});
	const [reloadUserInfos, setReloadUserInfos] = useState(false);
    const {userId, token} = useAuthenticated();

	useEffect(() => {
		if (userId){
            api.get(`/users/${userId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}).then(res=> setUserInfos(res.data)).catch(err=> console.log(err));
        } else {
            setUserInfos({})
        }
        

	}, [reloadUserInfos, token, userId]);

    const updateUserInfos = () => {
        setReloadUserInfos(!reloadUserInfos);
    }
	return (
		<UserInfosContext.Provider value={{ userInfos, updateUserInfos }}>
			{children}
		</UserInfosContext.Provider>
	);
};

export const useUserInfos = () => useContext(UserInfosContext);
