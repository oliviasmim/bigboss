import { SearchContainer } from "./styles";
import InputSearch from "./InputSearch";

const MenuSearchCustomer = (props) => {
	return (
		<SearchContainer>
			<InputSearch placeholder="Cliente" field="name" {...props} />
			<InputSearch
				placeholder="Email"
				field="email"
				displayNone
				{...props}
			/>
			<InputSearch
				placeholder="Telefone"
				displayNone
				field="tel"
				{...props}
			/>
		</SearchContainer>
	);
};

export default MenuSearchCustomer;
