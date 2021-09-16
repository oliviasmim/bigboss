import FormRegisterCustomer from "../../components/FormRegisterCustomer";
import PageLayout from "../../components/PageLayout";
import LastProjectsTable from "../../components/LastProjectsTable";
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const PageCostumer = () => {
	return (
		<PageLayout>
			<FormRegisterCustomer />
			<Button variant="text" color="secondary" startIcon={<Add />}>Adicionar contrato</Button>
            <LastProjectsTable maxRows={3}/>
		</PageLayout>
	);
};

export default PageCostumer;
