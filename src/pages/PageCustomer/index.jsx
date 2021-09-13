import FormRegisterCustomer from "../../components/FormRegisterCustomer";
import PageLayout from "../../components/PageLayout";

const PageCustomer = () => {
    return (
        <PageLayout>

            <FormRegisterCustomer isRegister={false}/>
        </PageLayout>
    )
}

export default PageCustomer;