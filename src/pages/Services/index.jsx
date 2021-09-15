import { useUserServices } from "../../providers/userServices";
import CardService from "../../components/CardService";
import PageLayout from "../../components/PageLayout";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import FormularioNewService from "../../components/FormNewService";
import { useModal } from "../../providers/Modal";
import Modal from "../../components/Modal";

const useStyles = makeStyles((theme) => ({
	container: {
		gap: "15px", 
		display: "flex", 
		flexWrap: "wrap",
		justifyContent: "space-evenly",
	},
	button: {
		display: "flex",
		justifyContent: "flex-end",
		paddingRight: "2rem",
		paddingBottom: "1rem"
	}
}))

const Services = () => {
  const { userServices } = useUserServices();
  const classes = useStyles();
  const { isModalVisible, handleCloseModal, handleOpenModal } = useModal();

  return (
    <PageLayout>
      	{isModalVisible && (
				<Modal onClose={handleCloseModal}>
					<FormularioNewService />
				</Modal>
			)}
      	<div className={classes.button}>
				<Button
					variant="text"
					color="secondary"
					startIcon={<Add />}
          			onClick={handleOpenModal}
				>
					Novo Serviço
				</Button>	
		</div>
      	<section className={classes.container}>
			{userServices.length  > 0 && userServices.map((item) => (
				<CardService key={item.id} {...item} />
			))}
		</section>
    </PageLayout>
  );
};

export default Services;
