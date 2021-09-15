import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useModal } from "../../providers/Modal";
import {
  ContainerContent,
  TitleForm,
  ContentColumnLarge,
  TitleService,
  ButtonsGroup,
  ButtonBox,
} from "./styles";
import api from "../../services/api";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "20ch",
    },
  },
}));

const FormularioNewService = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZpcnN0QG1haWwuY29tIiwiaWF0IjoxNjMxNTA4OTI0LCJleHAiOjE2MzE1OTUzMjQsInN1YiI6IjEifQ.nbfX7ZzbzaeAsiad79xhjry0xaohz6IQQkuI-kAKzy4";
  const { handleCloseModal } = useModal();

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
    /*Testar ainda a chamada da API */
    const apiBody = handleDataNewService(data);
    api
      .post("/services", apiBody, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log("Sucesso Add na API"))
      .catch((err) => console.log(err));
    console.log(data);
  };

  return (
    <div className="CardForm">
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <ContainerContent>
          <TitleForm>Novo Serviço:</TitleForm>
          <ContentColumnLarge>
            <TitleService>Título: </TitleService>
            <TextField
              label="Titulo"
              type="input"
              variant="outlined"
              size="small"
              color="primary"
              error={!!errors.titulo}
              helperText={errors.titulo?.message}
              {...register("titulo")}
            />
          </ContentColumnLarge>
          <ContentColumnLarge>
            <TitleService>Orçamento: </TitleService>
            <TextField
              label="Orçamento"
              type="input"
              variant="outlined"
              size="small"
              color="primary"
              error={!!errors.orcamento}
              helperText={errors.orcamento?.message}
              {...register("orcamento")}
            />
          </ContentColumnLarge>
          <ContentColumnLarge>
            <TitleService>Valor Final: </TitleService>
            <TextField
              label="Valor Final"
              type="input"
              //type="number"
              variant="outlined"
              size="small"
              color="primary"
              error={!!errors.valorfinal}
              helperText={errors.valorfinal?.message}
              {...register("valorfinal")}
            />
          </ContentColumnLarge>
          <ContentColumnLarge>
            <TitleService>Descrição: </TitleService>
            <TextField
              label="Descrição"
              type="input"
              variant="outlined"
              size="small"
              color="primary"
              error={!!errors.descricao}
              helperText={errors.descricao?.message}
              {...register("descricao")}
            />
          </ContentColumnLarge>
          <ContentColumnLarge>
            <TitleService>Linguagem Utilizada: </TitleService>
            <TextField
              label="Linguagem Utilizada"
              type="input"
              //type="descricao"
              variant="outlined"
              size="small"
              color="primary"
              error={!!errors.linguagem}
              helperText={errors.linguagem?.message}
              {...register("linguagem")}
            />
          </ContentColumnLarge>
        </ContainerContent>

        <ButtonsGroup>
          <ButtonBox>
            <Button
              onClick={handleCloseModal}
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
    </div>
  );
};

export default FormularioNewService;
