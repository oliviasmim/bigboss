import styled from "styled-components";

export const InputContainer = styled.div`
	border: 1px solid transparent;
	background-color: #eff0f6;
	width: 80%;
	height: 40px;
	font-weight: 500;
	font-size: 1rem;
	border-radius: 8px;
	display: ${(props) => (props.displayNone ? "none" : "flex")};
	overflow: hidden;
	padding: 0 6px;
	justify-content: space-between;
	@media (min-width: 600px) {
		display: flex;
		width: 25%;
	}
	input {
		border: 1px solid transparent;
		background-color: #eff0f6;
		width: 80%;
		&::placeholder {
			color: #1f2889;
		}
	}
	&:focus {
		border: 1px solid #5887ff;
	}
	&:active {
		border: 1px solid #5887ff;
	}
	&:hover {
		border: 1px solid #5887ff;
	}

	button {
		height: 100%;
		width: 20%;
		padding: 6px;
	}
	svg {
		color: #1f2889;
		height: 100%;
		max-width: 100%;
	}
`;
