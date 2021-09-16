import PageLayout from "../../components/PageLayout";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import CardCustomer from "../../components/CardCustomer";
import { useUserClients } from "../../providers/userClients";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import MenuSearchCustomer from "../../components/MenuSearchCustomer/SearchCustomer";

const useStyles = makeStyles((theme) => ({
	container: {
		gap: "15px", 
		display: "flex", 
		flexWrap: "wrap",
		justifyContent: "space-evenly",
	},
	button: {
		display: "flex",
		justifyContent: "flex-end",
		paddingRight: "2rem",
		paddingBottom: "1rem"
	}
}))

const SearchCustomer = () => {
	const classes = useStyles();
	const history = useHistory();
	const { userClients } = useUserClients();
    console.log(userClients)
	return (
		<PageLayout>
			<div className={classes.button}>
				<Button
					variant="text"
					color="secondary"
					startIcon={<Add />}
					onClick={() => history.push("/customer/register")}
				>
					Novo Cliente
				</Button>	
			</div>
			<MenuSearchCustomer />
			<section className={classes.container}>
				{userClients.length > 0 ? userClients.map((item) => (
					<CardCustomer
						key={item.id}
						action={() => history.push(`/customer/id/${item.id}`)}
						{...item}
					/>
				)) : <Typography variant="h2">Não há clientes cadastrados ainda</Typography>}
			</section>
		</PageLayout>
	);
};

export default SearchCustomer;
