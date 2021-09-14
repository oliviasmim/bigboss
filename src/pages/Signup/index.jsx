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

const Signup = () => {
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Header>
            <span className="span">Registre-se agora...</span>
            <p>&nbsp;</p>
            <h2>Cadastro</h2>
            <RedirectMsg>
              Já é cadastrado? Faça seu <LinkTo to="/login">Login.</LinkTo>
            </RedirectMsg>
          </Header>
          <FormSignUp />
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default Signup;
