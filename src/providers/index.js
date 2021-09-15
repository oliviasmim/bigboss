import { AutheticationProvider } from "./authentication";
import { UserInfosProvider } from "./userInfos";
import { UserClientsProvider } from "./userClients";
import { UserServicesProvider } from "./userServices";
import { UserContractsProvider } from "./userContracts";

const Providers = ({ children }) => {
	return (
		<AutheticationProvider>
			<UserInfosProvider>
				<UserClientsProvider>
					<UserServicesProvider>
						<UserContractsProvider>
							{children}
						</UserContractsProvider>
					</UserServicesProvider>
				</UserClientsProvider>
			</UserInfosProvider>
		</AutheticationProvider>
	);
};
export default Providers;
