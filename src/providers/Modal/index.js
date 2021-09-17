import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
	const [isModalVisibleNew, setIsModalVisibleNew] = useState(false);
	const [isModalVisibleEdit, setIsModalVisibleEdit] = useState(false);

	const handleCloseModalNew = () => setIsModalVisibleNew(false);
	const handleOpenModalNew = () => setIsModalVisibleNew(true);

	const handleCloseModalEdit = () => setIsModalVisibleEdit(false);
	const handleOpenModalEdit = () => setIsModalVisibleEdit(true);

	return (
		<ModalContext.Provider
			value={{
				isModalVisibleNew,
				handleCloseModalNew,
				handleOpenModalNew,
				isModalVisibleEdit,
				handleCloseModalEdit,
				handleOpenModalEdit,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

export const useModal = () => useContext(ModalContext);
