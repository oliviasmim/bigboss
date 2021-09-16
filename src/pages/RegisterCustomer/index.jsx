import FormRegisterCustomer from "../../components/FormRegisterCustomer";
import PageLayout from "../../components/PageLayout";

const RegisterCustomer = () => {
  return (
    <PageLayout>
      <FormRegisterCustomer isRegister={true} />
    </PageLayout>
  );
};

export default RegisterCustomer;
