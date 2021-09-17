import { useUserServices } from "../../providers/userServices";
import CardService from "../../components/CardService";
import PageLayout from "../../components/PageLayout";
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import FormularioNewService from "../../components/FormNewService";
import { useModal } from "../../providers/Modal";
import Modal from "../../components/Modal";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	container: {
		gap: "15px",
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-evenly",
	},
	button: {
		display: "flex",
		justifyContent: "space-between",
		paddingRight: "2rem",
		paddingBottom: "1rem",
	},
	PageTitle: {
		display: "flex",
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 30,
	},
}));

const Services = () => {
  const { userServices } = useUserServices();
  const classes = useStyles();
  const { isModalVisibleNew, handleCloseModalNew, handleOpenModalNew } =
    useModal();

  return (
    <PageLayout>
      {isModalVisibleNew && (
        <Modal onClose={handleCloseModalNew}>
          <FormularioNewService />
        </Modal>
      )}
      <div className={classes.button}>
        <Typography className={classes.PageTitle}>Serviços</Typography>
        <Button
          variant="text"
          color="secondary"
          startIcon={<Add />}
          onClick={handleOpenModalNew}
        >
          Novo Serviço
        </Button>
      </div>
      <section className={classes.container}>
        {userServices.length > 0 &&
          userServices.map((item) => <CardService key={item.id} {...item} />)}
      </section>
    </PageLayout>
  );
};

export default Services;
