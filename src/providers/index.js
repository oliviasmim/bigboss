import { ServicesProvider } from "./Services";

const Providers = ({ children }) => {
  return <ServicesProvider>{children}</ServicesProvider>;
};

export default Providers;
