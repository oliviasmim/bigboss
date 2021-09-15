import PageLayout from "../../components/PageLayout";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import CardCustomer from "../../components/CardCustomer";
import { useUserClients } from "../../providers/userClients";

const SearchCustomer = () => {
	const history = useHistory();
	const { userClients } = useUserClients();
    console.log(userClients)
	return (
		<PageLayout>
			<Button
				variant="text"
				color="secondary"
				startIcon={<Add />}
				onClick={() => history.push("/customer/register")}
			>
				Novo Cliente
			</Button>
			<div style={{ gap: "15px", display: "flex", flexWrap: "wrap" }}>
				{userClients.length > 0 ? userClients.map((item) => (
					<CardCustomer
						key={item.id}
						action={() => history.push(`/customer/id/${item.id}`)}
						{...item}
					/>
				)) : <h1>Não há clientes cadastrados ainda</h1>}
			</div>
		</PageLayout>
	);
};

export default SearchCustomer;
