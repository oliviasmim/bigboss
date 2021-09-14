import { getLettersAvatarSrc } from "../../services/avatarLetters"
import { CardContainer, ImageContainer, Badge, Image, CardContent } from "./styles";

const CardCustomer = ({ name, email, tel, clientSince, action, contracts }) => {
    const source = getLettersAvatarSrc(name);

    return (
        <CardContainer onClick={()=>action()}>
            <ImageContainer>
                <Image>
                  <img src={source} alt={`avatar:${name}`} />  
                </Image>
                <Badge>{contracts.length === 0 ? <>cliente ativo</> : <>cadastrado</>}</Badge>
            </ImageContainer>
            <CardContent>
                <h4>{name}</h4>
                <p>Email: {email}</p>
                <p>Telone: {tel}</p>
                <p>Data de cadastro: {clientSince}</p>
            </CardContent>
        </CardContainer>
    )
}

export default CardCustomer;