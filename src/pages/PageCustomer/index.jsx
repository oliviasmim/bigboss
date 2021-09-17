import FormRegisterCustomer from "../../components/FormRegisterCustomer";
import PageLayout from "../../components/PageLayout";
import LastProjectsTable from "../../components/LastProjectsTable";
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useParams } from "react-router-dom";
import { useUserContracts } from "../../providers/userContracts";
import Modal from "../../components/Modal";
import FormNewContract from "../../components/FormNewContract";
import { useState } from "react";

const PageCostumer = () => {
	const { clientId } = useParams();
	const { userContracts } = useUserContracts();
	const clientContracts = userContracts.filter(
		(item) => Number(item.client.id) === Number(clientId)
	);
	const [useModal, setUseModal] = useState(false);
	return (
		<>
			{useModal && (
				<Modal>
					<FormNewContract
						toClose={{ useModal: useModal, setModal: setUseModal }}
					/>
				</Modal>
			)}
			<PageLayout>
				<FormRegisterCustomer />
				<Button
					variant="text"
					color="secondary"
					startIcon={<Add />}
					onClick={() => setUseModal(!useModal)}
				>
					Adicionar contrato
				</Button>
				<LastProjectsTable maxRows={3} newRows={clientContracts} />
			</PageLayout>
		</>
	);
};

export default PageCostumer;
