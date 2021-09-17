import styled from "styled-components";

export const TitleForm = styled.p`
	color: var(--blue);
	font-size: 1.3rem;
	text-align: center;
	font-weight: bold;
	margin-bottom: 0.6rem;
	margin-top: 0.6rem;
`;
export const Select = styled.select`
	background-color: white;
	border: 1px solid var(--blue);
	border-radius: 10px;
	padding: 0.5rem;
	&:disabled {
		background: "blue" !important;
	}
`;

export const Label = styled.label`
	color: var(--blue);
	width: 100%;
	display: inline-flex;
	justify-content: space-between;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 25px;
	padding: 1rem;
`;
export const ButtonsContainer = styled.div`
	display: flex;
	gap: 15px;
	justify-content: flex-end;
`;

export const InputContainer = styled.div`
	display: grid;
	/* flex-wrap: wrap; */
	/* flex-direction: row; */
	flex-grow: 1;
`;
