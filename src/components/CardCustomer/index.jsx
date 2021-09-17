import { getLettersAvatarSrc } from "../../services/avatarLetters";
import {
  CardContainer,
  ImageContainer,
  Badge,
  Image,
  CardContent,
} from "./styles";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { useAuthenticated } from "../../providers/authentication";

const CardCustomer = ({ name, email, tel, clientSince, action, id }) => {
  const source = getLettersAvatarSrc(name);
  const [clientContracts, setClientContracts] = useState([]);
  const { token } = useAuthenticated();
  const event = new Date(clientSince);
  const options = { day: "numeric", month: "numeric", year: "numeric" };
  const date = event.toLocaleDateString(options);

  useEffect(() => {
    api
      .get(`/contracts/client/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setClientContracts(res.data))
      //Deixei esse console.log por conta para saber se tiver algo de errado com o UseEffect
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CardContainer onClick={() => action()}>
      <ImageContainer>
        <Image>
          <img src={source} alt={`avatar:${name}`} />
        </Image>
        <Badge>
          {clientContracts.length === 0 ? <>cliente ativo</> : <>cadastrado</>}
        </Badge>
      </ImageContainer>
      <CardContent>
        <h4>{name}</h4>
        <p>Email: {email}</p>
        <p>Telone: {tel}</p>
        <p>Data de cadastro: {date}</p>
      </CardContent>
    </CardContainer>
  );
};

export default CardCustomer;
