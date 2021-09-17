import PageLayout from "../../components/PageLayout";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import CardCustomer from "../../components/CardCustomer";
import { useUserClients } from "../../providers/userClients";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import MenuSearchCustomer from "../../components/MenuSearchCustomer/SearchCustomer";
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    gap: "15px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  button: {
    display: "flex",
    justifyContent: "space-between",
    paddingRight: "2rem",
    paddingBottom: "1rem",
  },
  PageTitle: {
    display: "flex",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
}));

const SearchCustomer = () => {
  const classes = useStyles();
  const history = useHistory();
  const { userClients, updateUserClients } = useUserClients();
  const [filtered, setFiltered] = useState(userClients);
  
  useEffect(() => {
      setFiltered(userClients)
    
  },[userClients])
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
			<MenuSearchCustomer
				filterFunction={setFiltered}
				filtered={filtered}
			/>
			<section className={classes.container}>
				{filtered.length > 0 ? (
					filtered.map((item) => (
						<CardCustomer
							key={item.id}
							action={() =>
								history.push(`/customer/id/${item.id}`)
							}
							{...item}
						/>
					))
				) : userClients.length > 0 ? (
					<Typography variant="h4">
						Não foram encontrados resultados!
					</Typography>
				) : (
					<Typography variant="h4">
						Não há clientes cadastrados ainda
					</Typography>
				)}
			</section>
		</PageLayout>
  );
};

export default SearchCustomer;
