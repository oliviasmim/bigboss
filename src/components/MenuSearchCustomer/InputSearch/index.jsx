/* eslint-disable no-fallthrough */
import { InputContainer } from "./styles"
import { Search } from "@material-ui/icons"
import { IconButton } from "@material-ui/core";
import { useUserClients } from "../../../providers/userClients";

const InputSearch = ({filtered, filterFunction, field, displayNone = false, ...rest}) => {
    const { userClients } = useUserClients();
    const handleFilter =(e)=> {
        switch (field) {
            case "name":
                filterFunction(filtered.filter(item=> item.name.toLowerCase().includes(e.target.value.toLowerCase()) ));
                if (e.target.value === ""){
                    filterFunction(userClients)
                }
                break;
            case "email":
                filterFunction(filtered.filter(item => item.email.toLowerCase().includes(e.target.value.toLowerCase())));
                if (e.target.value === "") {
					filterFunction(userClients);
				}
                break;
            case "tel":
                filterFunction(filtered.filter(item=> item.tel.includes(e.target.value) || item.cel.includes(e.target.value)))
                if (e.target.value === "") {
					filterFunction(userClients);
				}
                break;
            default:
                break;
        }
    }
    return (
        <InputContainer displayNone={displayNone}>
            <input {...rest} onChange={(e) => handleFilter(e)}/>
            <IconButton>
              <Search />  
            </IconButton> 
        </InputContainer>
    )
}

export default InputSearch;

