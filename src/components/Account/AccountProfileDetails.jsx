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
	const { name, email } = user;
	const classes = useStyles();
	const [values, setValues] = useState({
		firstName: name.split(" ")[0],
		lastName: name.split(" ")[1],
		email: email,
		phone: '',
		state: '',
		city: ''
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
		console.log(values)//mandar pra api
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