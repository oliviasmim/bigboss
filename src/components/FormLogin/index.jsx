import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MailOutline, Lock } from "@material-ui/icons";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Label } from "./style";
import { toast } from "react-toastify";

const useStyles = makeStyles(() => ({
  inputs: {
    backgroundColor: "white",
    margin: "12px 0",
    width: "100%",
    maxWidth: "24rem",
    border: "1px solid var(--blue)",
    borderRadius: "4px",

    "&:focus": {
      border: "1px solid var(--blue)",
    },

    "&:hover": {
      border: "none",
      outline: "none",
    },
  },

  icon: {
    color: "var(--blue)",
  },
}));

const FormLogin = () => {
  const classes = useStyles();

  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório!").email("E-mail inválido"),
    password: yup.string().min(6, "Mínimo 6 caracteres!"),
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
      .post("/login", data)
      .then((res) => {
        const { accessToken } = res.data;
        const userId = jwt_decode(accessToken).sub;
        localStorage.setItem("@BigBoss/users", JSON.stringify(accessToken));
        localStorage.setItem("userId", userId);
        history.push("/dashboard");
        toast.sucess("Sucesso!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitFunction)}>
      <h3>Comece sua jornada...</h3>
      <h1>Login</h1>
      <span>
        Ainda não tem conta? Efetue seu <Link to="/">cadastro</Link>
      </span>
      <Label>Email: </Label>
      <TextField
        className={classes.inputs}
        type="email"
        placeholder="E-mail"
        variant="outlined"
        InputProps={{ endAdornment: <MailOutline className={classes.icon} /> }}
        {...register("email")}
      />
      {errors.email?.message}
      <Label>Senha: </Label>
      <TextField
        className={classes.inputs}
        placeholder="Senha"
        variant="outlined"
        InputProps={{ endAdornment: <Lock className={classes.icon} /> }}
        type="password"
        {...register("password")}
      />
      {errors.password?.message}
      <Button variant="contained" color="primary" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
