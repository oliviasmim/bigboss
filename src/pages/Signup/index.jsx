import FormSignUp from "../../components/FormSignUp";
import {
	Background,
	Container,
	Content,
	AnimationContainer,
	Header,
	RedirectMsg,
	LinkTo,
} from "./styles";
import { Link } from "react-router-dom";

const Signup = () => {
	return (
		<Container>
			<Content>
				<AnimationContainer>
					<Header>
                        <h3>Registre-se agora...</h3>
                        <p>&nbsp;</p>
                        <h1>Cadastro</h1>
                        <RedirectMsg>Já é cadastrado? Faça seu <LinkTo to="/login">Login</LinkTo></RedirectMsg>
                    </Header>
                    <FormSignUp />
				</AnimationContainer>
			</Content>
			<Background />
		</Container>
	);
};

export default Signup;
