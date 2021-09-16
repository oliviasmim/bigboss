import { InputContainer } from "./styles"
import { Search } from "@material-ui/icons"
import { IconButton } from "@material-ui/core";

const InputSearch = ({props, displayNone = false, ...rest}) => {
    return (
        <InputContainer displayNone={displayNone}>
            <input {...rest} />
            <IconButton>
              <Search />  
            </IconButton> 
        </InputContainer>
    )
}

export default InputSearch;

