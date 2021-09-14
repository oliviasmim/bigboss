import image404 from "../../assets/404.svg";
import { Container, ButtonContainer } from "./styles";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
const Page404 = () => {
    const history = useHistory();

    return (
        <Container>
            <img src={image404} alt="error 404" />
            <p>A página que você está procurando foi removida, ou não existe.</p>
            <ButtonContainer>
              <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    onClick={() => history.push("/dashboard")}
                    > Voltar </Button>  
            </ButtonContainer>    
        </Container>
    )
}

export default Page404;
