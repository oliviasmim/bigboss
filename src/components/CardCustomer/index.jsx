import { getLettersAvatarSrc } from "../../services/avatarLetters"
import { CardContainer, ImageContainer, Badge, Image, CardContent } from "./styles";

const CardCustomer = ({ name, email, tel, date }) => {
    const source = getLettersAvatarSrc(name);

    //Fazer lógica para o status (prospect/active)
    return (
        <CardContainer>
            <ImageContainer>
                <Image>
                  <img src={source} alt={`avatar:${name}`} />  
                </Image>
                <Badge>status</Badge>
            </ImageContainer>
            <CardContent>
                <h4>{name}</h4>
                <p>Email: {email}</p>
                <p>Telone: {tel}</p>
                <p>Data de cadastro: {date}</p>
            </CardContent>
        </CardContainer>
    )
}

export default CardCustomer;