import { useModal } from "../../providers/Modal";
import FormularioNewService from "../../components/FormNewService";
import Modal from "../../components/Modal";
import PageLayout from "../../components/PageLayout";

const Services = () => {
  const { isModalVisible, handleCloseModal, handleOpenModal } = useModal();
  return (
    <PageLayout>
    <div>
      <button onClick={handleOpenModal}>Teste Modal</button>
      {isModalVisible && (
        <Modal onClose={handleCloseModal}>
          <FormularioNewService />
        </Modal>
      )}
    </div>
    </PageLayout>
  );
};

export default Services;
