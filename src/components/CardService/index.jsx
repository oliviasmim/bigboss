import { getOneLetterAvatarSrc } from "../../services/avatarLetters";
import { CardContainer, ImageContainer, Image, CardContent } from "./styles";
import { MoreHoriz } from "@material-ui/icons";
import { IconButton, Menu, MenuItem, Fade } from "@material-ui/core";
import { useUserServices } from "../../providers/userServices";
import { useAuthenticated } from "../../providers/authentication";
import { useModal } from "../../providers/Modal";
import api from "../../services/api";
import { useState } from "react";

const CardService = ({ title, description, id }) => {
  const { handleOpenModalEdit } = useModal();
  const { token } = useAuthenticated();
  const { updateUserServices, handleIdService } = useUserServices();
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
  //Delete Card Function
  const handleDeleteServiceCard = (idService) => {
    api
      .delete(`/services/${idService}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        handleClose();
        updateUserServices();
      })
      .catch((err) => updateUserServices());
  };

  const handleMenuClose = () => {
    handleOpenModalEdit();
    handleClose();
  };

  return (
    <>
      {console.log("TesteCard")}
      <CardContainer>
        <ImageContainer>
          <Image>
            <img src={source} alt={`avatar:${title}`} />
          </Image>
          <IconButton
            aria-controls="fade-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
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
            <MenuItem onClick={() => handleIdService(id, handleMenuClose)}>
              Editar
            </MenuItem>
            <MenuItem onClick={() => handleDeleteServiceCard(id)}>
              Apagar
            </MenuItem>
          </Menu>
        </ImageContainer>
        <CardContent>
          <h4>{title}</h4>
          <p>{description}</p>
        </CardContent>
      </CardContainer>
    </>
  );
};

export default CardService;
