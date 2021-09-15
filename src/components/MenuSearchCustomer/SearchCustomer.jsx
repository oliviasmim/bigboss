import { SearchContainer } from "./styles";
import InputSearch from "./InputSearch";

const MenuSearchCustomer = () => {
    return (
        <SearchContainer>
            <InputSearch placeholder="Cliente"/>
            <InputSearch placeholder="Email" displayNone/>
            <InputSearch placeholder="Telefone" displayNone/>
        </SearchContainer>
    )
}

export default MenuSearchCustomer;