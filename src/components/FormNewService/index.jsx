import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useModal } from "../../providers/Modal";
import { useUserServices } from "../../providers/userServices";
import { ToastContainer, toast } from "react-toastify";
import { useAuthenticated } from "../../providers/authentication";
import {
  ContainerContent,
  TitleForm,
  ContentColumnLarge,
  ContentColumnLargeFlex,
  FlexOrcamentoVF,
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

const FormularioNewService = () => {
  const { updateUserServices } = useUserServices();
  const { handleCloseModalNew } = useModal();
  const { token } = useAuthenticated();

  const classes = useStyles();

  const formSchema = yup.object().shape({
    titulo: yup
      .string()
      .required("Título Obrigatório")
      .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "Somente letras"),
    orcamento: yup.string().required("Orçamento obrigatório"),
    valorfinal: yup.string().required("Valor Final Obrigatório"),
    descricao: yup.string(),
    linguagem: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleDataNewService = (data) => {
    const dataApi = {
      title: data.titulo,
      description: data.descricao,
      language: data.linguagem,
      budget: data.orcamento,
      finalValue: data.valorfinal,
    };
    return dataApi;
  };

  const onSubmit = (data) => {
    const apiBody = handleDataNewService(data);
    api
      .post("/services", apiBody, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        updateUserServices();
        handleCloseModalNew();
        notify(true, "Serviço Adicionado!");
      })
      .catch((err) => notify(false, "Erro ao adicionar Serviço :c"));
  };

  const notify = (isSuccess, text) =>
    isSuccess
      ? toast.success(text, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      : toast.error(text, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

  return (
    <div className="CardForm">
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <ContainerContent>
          <TitleForm>Novo Serviço:</TitleForm>
          <ContentColumnLarge>
            {/* <TitleService>Título: </TitleService> */}
            <TextField
              label="Título"
              type="input"
              //   variant="filled"
              //   size="small"
              fullWidth
              //   color="primary"
              error={!!errors.titulo}
              helperText={errors.titulo?.message}
              {...register("titulo")}
            />
          </ContentColumnLarge>
          <FlexOrcamentoVF className={classes.text}>
            <ContentColumnLargeFlex>
              {/* <TitleService>Orçamento: </TitleService> */}
              <TextField
                label="Orçamento"
                type="input"
                // variant="filled"
                // size="small"
                fullWidth
                // color="primary"
                error={!!errors.orcamento}
                helperText={errors.orcamento?.message}
                {...register("orcamento")}
              />
            </ContentColumnLargeFlex>
            <ContentColumnLargeFlex>
              {/* <TitleService>Valor Final: </TitleService> */}
              <TextField
                label="Valor Final"
                type="input"
                // variant="filled"
                // size="small"
                fullWidth
                // color="primary"
                error={!!errors.valorfinal}
                helperText={errors.valorfinal?.message}
                {...register("valorfinal")}
              />
            </ContentColumnLargeFlex>
          </FlexOrcamentoVF>

          <ContentColumnLarge>
            {/* <TitleService>Descrição: </TitleService> */}
            <TextField
              label="Descrição"
              type="input"
              fullWidth
              //   variant="filled"
              multiline
              rows={3}
              //   size="small"
              //   color="primary"
              error={!!errors.descricao}
              helperText={errors.descricao?.message}
              {...register("descricao")}
            />
          </ContentColumnLarge>
          <ContentColumnLarge>
            {/* <TitleService>Linguagem Utilizada: </TitleService> */}
            <TextField
              label="Linguagem Utilizada"
              type="input"
              //   variant="filled"
              fullWidth
              //   size="small"
              //   color="primary"
              error={!!errors.linguagem}
              helperText={errors.linguagem?.message}
              {...register("linguagem")}
            />
          </ContentColumnLarge>
        </ContainerContent>

        <ButtonsGroup>
          <ButtonBox>
            <Button
              onClick={handleCloseModalNew}
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
              Salvar
            </Button>
          </ButtonBox>
        </ButtonsGroup>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default FormularioNewService;
