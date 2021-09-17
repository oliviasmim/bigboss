import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useModal } from "../../providers/Modal";
import { useUserServices } from "../../providers/userServices";
import { useAuthenticated } from "../../providers/authentication";
import {
  ContainerContent,
  TitleForm,
  ContentColumnLarge,
  ContentColumnLargeFlex,
  FlexOrcamentoVF,
  TitleService,
  ButtonsGroup,
  ButtonBox,
} from "./styles";
import api from "../../services/api";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      //margin: theme.spacing(1),
      //width: "40ch",
    },
  },
  text: {
    "& .MuiTextField-root": {
      //margin: theme.spacing(1),
      //width: "19ch",
    },
  },
}));

const FormEditService = () => {
  const { handleCloseModalEdit } = useModal();
  const { updateUserServices, currentService } = useUserServices();
  const { token } = useAuthenticated();

  const classes = useStyles();

  const formSchema = yup.object().shape({
    newtitulo: yup
      .string()
      .required("Título Obrigatório")
      .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "Somente letras"),
    neworcamento: yup.string().required("Orçamento obrigatório"),
    newvalorfinal: yup.string().required("Valor Final Obrigatório"),
    newdescricao: yup.string(),
    newlinguagem: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleDataEditService = (data) => {
    const dataApi = {
      title: data.newtitulo,
      description: data.newdescricao,
      language: data.newlinguagem,
      budget: data.neworcamento,
      finalValue: data.newvalorfinal,
    };
    return dataApi;
  };

  const onSubmit = (data) => {
    const apiBody = handleDataEditService(data);
    api
      .patch(`/services/${currentService.id}`, apiBody, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        updateUserServices();
        handleCloseModalEdit();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="CardForm">
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <ContainerContent>
          <TitleForm>Editar Serviço:</TitleForm>
          <ContentColumnLarge>
            <TitleService>Título: </TitleService>
            <TextField
              label="Titulo"
              type="input"
              variant="filled"
              size="small"
              defaultValue={currentService.title}
              fullWidth
              color="primary"
              error={!!errors.newtitulo}
              helperText={errors.newtitulo?.message}
              {...register("newtitulo")}
            />
          </ContentColumnLarge>
          <FlexOrcamentoVF className={classes.text}>
            <ContentColumnLargeFlex>
              <TitleService>Orçamento: </TitleService>
              <TextField
                label="Orçamento"
                type="input"
                variant="filled"
                size="small"
                defaultValue={currentService.budget}
                fullWidth
                color="primary"
                error={!!errors.neworcamento}
                helperText={errors.neworcamento?.message}
                {...register("neworcamento")}
              />
            </ContentColumnLargeFlex>
            <ContentColumnLargeFlex>
              <TitleService>Valor Final: </TitleService>
              <TextField
                label="Valor Final"
                type="input"
                variant="filled"
                size="small"
                defaultValue={currentService.finalValue}
                fullWidth
                color="primary"
                error={!!errors.newvalorfinal}
                helperText={errors.newvalorfinal?.message}
                {...register("newvalorfinal")}
              />
            </ContentColumnLargeFlex>
          </FlexOrcamentoVF>

          <ContentColumnLarge>
            <TitleService>Descrição: </TitleService>
            <TextField
              label="Descrição"
              type="input"
              fullWidth
              variant="filled"
              multiline
              rows={3}
              size="small"
              defaultValue={currentService.description}
              color="primary"
              error={!!errors.newdescricao}
              helperText={errors.newdescricao?.message}
              {...register("newdescricao")}
            />
          </ContentColumnLarge>
          <ContentColumnLarge>
            <TitleService>Linguagem Utilizada: </TitleService>
            <TextField
              label="Linguagem Utilizada"
              type="input"
              variant="filled"
              fullWidth
              size="small"
              defaultValue={currentService.language}
              color="primary"
              error={!!errors.newlinguagem}
              helperText={errors.newlinguagem?.message}
              {...register("newlinguagem")}
            />
          </ContentColumnLarge>
        </ContainerContent>

        <ButtonsGroup>
          <ButtonBox>
            <Button
              onClick={handleCloseModalEdit}
              variant="contained"
              size="small"
              color="secondary"
            >
              Cancelar
            </Button>
          </ButtonBox>

          <ButtonBox>
            <Button
              type="submit"
              variant="contained"
              size="small"
              color="primary"
            >
              Salvar Edição
            </Button>
          </ButtonBox>
        </ButtonsGroup>
      </form>
    </div>
  );
};

export default FormEditService;
