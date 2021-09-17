import { AiFillLinkedin, AiFillGitlab } from "react-icons/ai";
import { CardContainer } from "./styles";

const TeamCard = ({ name, ImageSrc, linkedin, gitlab }) => {
    return (
        <CardContainer>
            <img src={ImageSrc} alt="developer" />
            <h3>{name}</h3>
            <p>Dev. Front End</p>
            <div>
                <a href={linkedin} target="_blank" rel="noreferrer"><AiFillLinkedin /></a> 
                <a href={gitlab} target="_blank" rel="noreferrer"><AiFillGitlab /></a> 
            </div>
        </CardContainer>
    )
}

export default TeamCard;