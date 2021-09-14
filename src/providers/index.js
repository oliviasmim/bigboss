import { AutheticationProvider } from "./authentication";
import { ModalProvider } from "./Modal";

const Providers = ({ children }) => {
  return (
    <AutheticationProvider>
      <ModalProvider>{children}</ModalProvider>
    </AutheticationProvider>
  );
};
export default Providers;
