import { SearchContainer } from "./styles";
import { InputSearch, InputDate } from "./InputSearch";
import StatusButton from "../StatusButton"

const MenuSearchService = () => {
    return (
        <SearchContainer>
            <InputSearch placeholder="Cliente"/>
            <InputSearch placeholder="CPF/CNPJ" displayNone/>
            <InputSearch placeholder="Serviço" displayNone/>
            <InputSearch placeholder="Linguagem" displayNone/>
            {/* <InputDate /> */}
            <StatusButton />
        </SearchContainer>
    )
}

export default MenuSearchService;