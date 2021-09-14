import { useModal } from "../../providers/Modal";
import FormularioNewService from "../../components/FormNewService";
import Modal from "../../components/Modal";
const Services = () => {
  const { isModalVisible, handleCloseModal, handleOpenModal } = useModal();
  return (
    <div>
      <button onClick={handleOpenModal}>Teste Modal</button>
      {isModalVisible && (
        <Modal onClose={handleCloseModal}>
          <FormularioNewService />
        </Modal>
      )}
    </div>
  );
};

export default Services;
