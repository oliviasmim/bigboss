import { AutheticationProvider } from "./authentication";

const Providers = ({ children }) => {
	return (
		<AutheticationProvider>
            {children}
		</AutheticationProvider>
	);
};
export default Providers;