import { Background, Container, Content, AnimationContainer } from "./styles";
import FormLogin from "../../components/FormLogin";

const Login = () => {
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <FormLogin />
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Login;
