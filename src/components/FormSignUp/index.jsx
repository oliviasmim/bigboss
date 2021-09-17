import { Form } from "./styles";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MailOutline, Lock, AccountCircle } from "@material-ui/icons";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Label, ErrorMsg } from "./styles";
import { toast } from "react-toastify";
import { useHistory, Redirect } from "react-router-dom";
import { ref } from "yup";
import { useAuthenticated } from "../../providers/authentication";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  inputs: {
    backgroundColor: "white",
    width: "100%",
    maxWidth: "24rem",
    borderRadius: "4px",
  },
  icon: {
    color: "var(--blue)",
  },
}));

const FormSignUp = () => {
  const classes = useStyles();
  const { authenticated, setAuthenticated } = useAuthenticated();
  const history = useHistory();
  const [apiError, setApiError] = useState("");

  const formSchema = yup.object().shape({
    firstName: yup.string().required("Nome Obrigatório"),
    email: yup
      .string()
      .required("E-mail obrigatório!")
      .email("E-mail inválido"),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .min(6, "Mínimo 6 caracteres!"),
    confirmPassword: yup
      .string()
      .required("Confirme sua senha!")
      .oneOf([ref("password")], "Suas senhas estão diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    api
      .post("/register", data)
      .then((res) => {
        const { accessToken } = res.data;
        const userId = jwt_decode(accessToken).sub;
        localStorage.setItem("@BigBoss/users", JSON.stringify(accessToken));
        localStorage.setItem("userId", userId);
        setAuthenticated(true);
        history.push("/dashboard");
        toast.success("Sucesso!");
      })
      .catch((err) => {
        setApiError(err.response.data);
      });
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Form noValidate onSubmit={handleSubmit(onSubmitFunction)}>
      <Label>
        <span>Nome ou Razão Social:</span>
        {errors.firstName && <ErrorMsg>({errors.firstName?.message})</ErrorMsg>}
      </Label>
      <TextField
        className={classes.inputs}
        type="text"
        placeholder="Nome ou Razão Social"
        variant="outlined"
        InputProps={{
          endAdornment: <AccountCircle className={classes.icon} />,
        }}
        {...register("firstName")}
      />
      {}
      <Label>
        <span>E-mail:</span>{" "}
        {errors.email && <ErrorMsg>({errors.email?.message})</ErrorMsg>}
        {apiError && <ErrorMsg>({apiError})</ErrorMsg>}
      </Label>
      <TextField
        className={classes.inputs}
        type="email"
        placeholder="E-mail"
        variant="outlined"
        InputProps={{
          endAdornment: <MailOutline className={classes.icon} />,
        }}
        {...register("email")}
      />
      <Label>
        <span>Senha:</span>
        {errors.password && <ErrorMsg>({errors.password?.message})</ErrorMsg>}
      </Label>
      <TextField
        className={classes.inputs}
        placeholder="Senha"
        variant="outlined"
        InputProps={{ endAdornment: <Lock className={classes.icon} /> }}
        type="password"
        {...register("password")}
      />
      <Label>
        <span>Confirme sua senha:</span>
        {errors.confirmPassword && (
          <ErrorMsg>({errors.confirmPassword?.message})</ErrorMsg>
        )}
      </Label>
      <TextField
        className={classes.inputs}
        placeholder="Confirme sua senha"
        variant="outlined"
        InputProps={{ endAdornment: <Lock className={classes.icon} /> }}
        type="password"
        {...register("confirmPassword")}
      />
      <p>&nbsp;</p>
      <Button variant="contained" color="primary" type="submit" fullWidth>
        Cadastrar
      </Button>
    </Form>
  );
};

export default FormSignUp;
