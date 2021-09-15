import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCloseModal = () => setIsModalVisible(false);
  const handleOpenModal = () => setIsModalVisible(true);

  return (
    <ModalContext.Provider
      value={{ isModalVisible, handleCloseModal, handleOpenModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
