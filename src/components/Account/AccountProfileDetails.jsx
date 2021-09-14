import { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	Divider,
	Grid,
	TextField
} from '@material-ui/core';
import api from '../../services/api';

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
		[theme.breakpoints.up('sm')]: {
            maxWidth: "65vw",
        }
    },
	button: {
		display: 'flex',
		justifyContent: 'flex-end',
		padding: 15
	}
}));

const AccountProfileDetails = ({ user }) => {
	const token =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZpcnN0QG1haWwuY29tIiwiaWF0IjoxNjMxNTA4OTI0LCJleHAiOjE2MzE1OTUzMjQsInN1YiI6IjEifQ.nbfX7ZzbzaeAsiad79xhjry0xaohz6IQQkuI-kAKzy4";
	const { name, email, phone = "", state = "", city = "", userId } = user;
	const classes = useStyles();
	const [values, setValues] = useState({
		firstName: name.split(" ")[0],
		lastName: name.split(" ")[1],
		email: email,
		phone: phone,
		state: state,
		city: city,
	});

	const handleChange = (event) => {
		event.preventDefault();
		setValues({
		...values,
		[event.target.name]: event.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			name: `${values.firstName} ${values.lastName}`,
			email: values.email,
			phone: values.phone,
			state: values.state,
			city: values.city
		};

		api.patch(`/users/${userId}`, data, {
				headers: {
					Authorization: `Bearer ${token}`
				}
		});
	}

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
							name="firstName"
							onChange={handleChange}
							required
							value={values.firstName}
							variant="outlined"
						/>
					</Grid>
					<Grid item md={6} xs={12} >
						<TextField
							fullWidth
							label="Sobrenome"
							name="lastName"
							onChange={handleChange}
							required
							value={values.lastName}
							variant="outlined"
						/>
					</Grid>
					<Grid item md={6} xs={12} >
						<TextField
							fullWidth
							label="Email"
							name="email"
							onChange={handleChange}
							required
							value={values.email}
							variant="outlined"
						/>
					</Grid>
					<Grid item md={6} xs={12} >
						<TextField
							fullWidth
							label="Telefone"
							name="phone"
							mask="(99) 9999-99999"
							onChange={handleChange}
							value={values.phone}
							variant="outlined"
						/>
					</Grid>
					<Grid item md={6} xs={12} >
						<TextField
							fullWidth
							label="Cidade"
							name="city"
							onChange={handleChange}
							required
							value={values.city}
							variant="outlined"
						/>
					</Grid>
					<Grid item md={6} xs={12} >
						<TextField
							fullWidth
							label="Selecione o estado"
							name="state"
							onChange={handleChange}
							required
							select
							SelectProps={{ native: true }}
							value={values.state}
							variant="outlined"
						>
							{states.map((option) => (
							<option
								key={option}
								value={option}
							>
								{option}
							</option>
							))}
						</TextField>
					</Grid>
				</Grid>
			</CardContent>
			<Divider />
				<Box className={classes.button}>
					<Button
						color="primary"
						variant="contained"
						type="submit"
					>
						Save details
					</Button>
				</Box>
			</Card>
		</form>
	);
};

export default AccountProfileDetails;