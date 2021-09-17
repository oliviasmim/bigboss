import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";
import api from "../../services/api";
import { useAuthenticated } from "../../providers/authentication";
import { useUserInfos } from "../../providers/userInfos";
import { ToastContainer, toast } from "react-toastify";

const states = [
  "",
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up("sm")]: {
      maxWidth: "65vw",
    },
  },
  button: {
    display: "flex",
    justifyContent: "flex-end",
    padding: 15,
  },
}));

const AccountProfileDetails = ({ user }) => {
  const { firstName, email, id, lastName, phone, state, city } = user;
  const { token } = useAuthenticated();
  const { updateUserInfos } = useUserInfos();
  const classes = useStyles();
  const [values, setValues] = useState({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    state: state,
    city: city,
  });

  const handleChange = (event) => {
    event.preventDefault();
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .patch(`/users/${id}`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        updateUserInfos();
        notify(true, "Alteração concluída com sucesso");
      })
      .catch((err) => notify(false, "Erro ao editar"));
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
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Card className={classes.container}>
        <CardHeader
          subheader="As informações abaixo podem ser editadas"
          title="Perfil"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Nome"
                placeholder="Nome"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Sobrenome"
                placeholder="Sobrenome"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Telefone"
                placeholder="Telefone"
                name="phone"
                mask="(99) 9999-99999"
                onChange={handleChange}
                value={values.phone}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Cidade"
                placeholder="Cidade"
                name="city"
                onChange={handleChange}
                required
                value={values.city}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Selecione o estado"
                placeholder="Selecione o estado"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
              >
                {states.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box className={classes.button}>
          <Button color="primary" variant="contained" type="submit">
            Salvar
          </Button>
        </Box>
      </Card>
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
    </form>
  );
};

export default AccountProfileDetails;
