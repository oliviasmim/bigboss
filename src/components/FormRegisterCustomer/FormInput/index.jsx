import { InputContainer, Input, Label, TextArea, Select } from "./styles";
import React from "react";

const FormInput = React.forwardRef((props, ref) => {
	const {
		label,
		size,
		multiline,
		errorMessage,
		funcCep,
		funcRua,
		funcBairro,
		funcEstado,
		funcCidade,
		options,
		value,
	} = props;

	return (
		<InputContainer>
			<Label
				errorMessage={errorMessage}
				size={size}
			>
				{errorMessage ? (
					<>
						<span>{label}</span>
						<span
							style={{
								fontSize: "12px",
								transform: "translateY(3px)",
							}}
						>
							{errorMessage}
						</span>
					</>
				) : (
					label
				)}
			</Label>
			{options ? (
				<Select
					value={value}
                    {...props}
					onChange={(e) => funcEstado(e.target.value)}
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
				/>
			) : (
				<Input
					inputRef={ref}
					{...props}
					onChange={(e) => {
						if (!!funcCep) {
							funcCep(e.target.value);
						}
						if (!!funcRua) {
							funcRua(e.target.value);
						}
						if (!!funcBairro) {
							funcBairro(e.target.value);
						}
						if (!!funcCidade) {
							funcCidade(e.target.value);
						}
					}}
				/>
			)}
		</InputContainer>
	);
});

export default FormInput;
