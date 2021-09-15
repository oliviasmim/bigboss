import { useModal } from "../../providers/Modal";
import FormularioNewService from "../../components/FormNewService";
import Modal from "../../components/Modal";
import PageLayout from "../../components/PageLayout";
import CardService from "../../components/CardService";
import { useUserServices } from "../../providers/userServices";
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const Services = () => {
  const { isModalVisible, handleCloseModal, handleOpenModal } = useModal();
  const { userServices } = useUserServices();

  return (
		<PageLayout>
			<div style={{display:'flex', flexDirection: "column", gap: "15px"}}>
				<Button
					variant="text"
					color="secondary"
					onClick={handleOpenModal}
					style={{ alignSelf: "flex-end" }}
					startIcon={<Add />}
				>
					Criar novo
				</Button>

				<div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
					{isModalVisible && (
						<Modal onClose={handleCloseModal}>
							<FormularioNewService />
						</Modal>
					)}
					{userServices.length > 0
						? userServices.map((item) => (
								<CardService key={item.id} {...item} />
						  ))
						: null}
				</div>
			</div>
		</PageLayout>
  );
};

export default Services;
