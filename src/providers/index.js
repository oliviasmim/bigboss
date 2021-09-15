<<<<<<< HEAD
import { AutheticationProvider } from "./authentication";
import { UserInfosProvider } from "./userInfos";
import { UserClientsProvider } from "./userClients";
import { UserServicesProvider } from "./userServices";
import { UserContractsProvider } from "./userContracts";
import { ModalProvider } from "./Modal";

const Providers = ({ children }) => {
	return (
		<AutheticationProvider>
			<ModalProvider>
				<UserInfosProvider>
					<UserClientsProvider>
						<UserServicesProvider>
							<UserContractsProvider>
								{children}
							</UserContractsProvider>
						</UserServicesProvider>
					</UserClientsProvider>
				</UserInfosProvider>
			</ModalProvider>
		</AutheticationProvider>
	);
};
export default Providers;
=======
>>>>>>> f34744aaf8b89ec5a868dc7fc73b9115bc7d344e
