import { getOneLetterAvatarSrc } from "../../services/avatarLetters";
import { CardContainer, ImageContainer, Image, CardContent } from "./styles";
import { MoreHoriz } from "@material-ui/icons";
import { IconButton, Menu, MenuItem, Fade } from "@material-ui/core";
import { useState } from "react";

const CardService = ({ title, description }) => {
    const source = getOneLetterAvatarSrc(title);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    //Fazer implementar o apagar e o editar
    return (
        <CardContainer>
            <ImageContainer>
                <Image>
                  <img src={source} alt={`avatar:${title}`} />  
                </Image>
                <IconButton aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                    <MoreHoriz />
                </IconButton>
                <Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={handleClose}>Editar</MenuItem> 
                    <MenuItem onClick={handleClose}>Apagar</MenuItem>
                </Menu>
            </ImageContainer>
            <CardContent>
                <h4>{title}</h4>
                <p>{description}</p>
            </CardContent>
        </CardContainer>
    )
}

export default CardService;