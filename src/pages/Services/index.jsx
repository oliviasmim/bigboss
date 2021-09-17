import { useUserServices } from "../../providers/userServices";
import CardService from "../../components/CardService";
import PageLayout from "../../components/PageLayout";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import FormularioNewService from "../../components/FormNewService";
import FormEditService from "../../components/FormEditService";
import { useModal } from "../../providers/Modal";
import Modal from "../../components/Modal";

/** */
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
    paddingBottom: "1rem",
  },
}));

const Services = () => {
  const { userServices } = useUserServices();
  const classes = useStyles();
  const {
    isModalVisibleNew,
    handleCloseModalNew,
    handleOpenModalNew,
    isModalVisibleEdit,
    handleCloseModalEdit,
  } = useModal();

  return (
    <PageLayout>
      {isModalVisibleNew && (
        <Modal onClose={handleCloseModalNew}>
          <FormularioNewService />
        </Modal>
      )}
      {isModalVisibleEdit && (
        <Modal onClose={handleCloseModalEdit}>
          <FormEditService />
        </Modal>
      )}
      <div className={classes.button}>
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
