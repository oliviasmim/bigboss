import { Link, useHistory, Redirect } from "react-router-dom";
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
import { useAuthenticated } from "../../providers/authentication";
import { RedirectMsg, LinkTo } from "../../pages/Signup/styles";
import { ErrorMsg } from "../FormSignUp/styles";

const useStyles = makeStyles(() => ({
  inputs: {
    backgroundColor: "white",
    margin: "12px 0",
    width: "100%",
    maxWidth: "24rem",
    borderRadius: "4px",

  },

  icon: {
    color: "var(--blue)",
  },

}));

const FormLogin = () => {
  const classes = useStyles();

  const history = useHistory();

  const { authenticated, setAuthenticated } = useAuthenticated();

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório!").email("E-mail inválido"),
    password: yup.string().required("Campo obrigatório!").min(6, "Mínimo 6 caracteres!"),
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
        setAuthenticated(true);
        history.push("/dashboard");
        toast.success("Sucesso!");
      })
      .catch(() => {
        toast.error("E-mail ou senha inválidos!");
      });
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
		<form noValidate onSubmit={handleSubmit(onSubmitFunction)}>
			<h3>Comece sua jornada...</h3>
			<p>&nbsp;</p>
			<h1>Login</h1>
			<RedirectMsg>
				Ainda não tem conta? Efetue seu{" "}
				<LinkTo to="/signup">Cadastro.</LinkTo>
			</RedirectMsg>
			<Label>
				<span>E-mail:</span>{" "}
				{errors.email && (
					<ErrorMsg>({errors.email?.message})</ErrorMsg>
				)}
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
			{/* {errors.email?.message} */}
			<Label>
				<span>Senha:</span>{" "}
				{errors.password && (
					<ErrorMsg>({errors.password?.message})</ErrorMsg>
				)}
			</Label>
			<TextField
				className={classes.inputs}
				placeholder="Senha"
				variant="outlined"
				InputProps={{ endAdornment: <Lock className={classes.icon} /> }}
				type="password"
				{...register("password")}
			/>
			{/* {errors.password?.message} */}
			<p>&nbsp;</p>
			<Button variant="contained" color="primary" type="submit" fullWidth>
				Login
			</Button>
		</form>
  );
};

export default FormLogin;
