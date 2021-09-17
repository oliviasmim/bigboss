import { getLettersAvatarSrc } from "../../services/avatarLetters";
import {
  CardContainer,
  ImageContainer,
  Badge,
  Image,
  CardContent,
} from "./styles";
import { useState, useEffect, useMemo } from "react";
import api from "../../services/api";
import { useAuthenticated } from "../../providers/authentication";
import { useUserContracts } from "../../providers/userContracts";

const CardCustomer = ({ name, email, tel, clientSince, action, id }) => {
  const source = getLettersAvatarSrc(name);
const { userContracts } = useUserContracts();
  const event = new Date(clientSince);
  const options = { day: "numeric", month: "numeric", year: "numeric" };
  const date = event.toLocaleDateString(options);
    
  const getBadge = () => {
    let filtered = userContracts.filter(item => item.client.id === id);
    if (filtered.length === 0){
        return "Potencial";
    }
    let roll = filtered.filter(item=> item.status === "Em andamento");
    if (roll.length > 0){
        return "Trabalhando";
    }
    return "Concluído(s)"
  }
  
  
  return (
    <CardContainer onClick={() => action()}>
      <ImageContainer>
        <Image>
          <img src={source} alt={`avatar:${name}`} />
        </Image>
        <Badge text={getBadge()}>
          {/* {clientContracts.length === 0 ?  <>Cadastrado</> : activeContracts.length === 0 ? <>Em andamento</> : <>Concluídos</>} */}
          {getBadge()}
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
