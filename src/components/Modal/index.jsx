import { Container, ModalBox } from "./styles";
const Modal = ({ children }) => {
	return (
		<ModalBox>
			<Container>
				<div className="content">{children}</div>
			</Container>
		</ModalBox>
	);
};

export default Modal;
