import { InputContainer, Input, Label, TextArea, Select, Span } from "./styles";
import React from "react";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const FormInput = React.forwardRef((props, ref) => {
	const {
		label,
		size,
		multiline,
		options,
		value,
        tipedate,
        changefunction,
        errormessage,
	} = props;

	return (
		<InputContainer>
			<Label size={size}>
				{errormessage ? (
					<>
						<span>{label}</span>
						<Span>{errormessage}</Span>
					</>
				) : (
					<span>{label}</span>
				)}
			</Label>
			{options ? (
				<Select
					value={value}
					{...props}
					onChange={(e) => changefunction(e.target.value)}
				>
					{options.map((item) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</Select>
			) : multiline ? (
				<TextArea
					rows="4"
					ref={ref}
					{...props}
					onChange={(e) => changefunction(e.target.value)}
				/>
			) : tipedate ? (
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
						onChange={(date) => changefunction(date)}
					/>{" "}
				</MuiPickersUtilsProvider>
			) : (
				<Input
					inputRef={ref}
					{...props}
					value={value}
					error={!!errormessage}
					onChange={(e) => changefunction(e.target.value)}
				/>
			)}
		</InputContainer>
	);
});

export default FormInput;
