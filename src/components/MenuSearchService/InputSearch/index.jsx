import { InputContainer } from "./styles";
import { Search } from "@material-ui/icons";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { IconButton } from "@material-ui/core";

export const InputSearch = ({ props, displayNone = false, ...rest }) => {
	return (
		<InputContainer displayNone={displayNone}>
			<input {...rest} />
			<IconButton>
				<Search />
			</IconButton>
		</InputContainer>
	);
};

export const InputDate = ({ props, ...rest }) => {
	return (
		<InputContainer>
			<MuiPickersUtilsProvider
				utils={DateFnsUtils}
				{...props}
				helperText={null}
			>
				<KeyboardDatePicker
					format="dd/MM/yyyy"
					{...props}
					label={null}
					InputProps={{
						disableUnderline: true,
					}}
					helperText={null}
					KeyboardButtonProps={{
						"aria-label": "change date",
					}}
					onChange={(date) => date}
				/>
			</MuiPickersUtilsProvider>
		</InputContainer>
	);
};
