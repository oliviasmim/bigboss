import styled from "styled-components";

export const CardContainer = styled.div`
	width: 240px;
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 30px 15px;
	border: 1px solid #dedede;
	border-radius: 5px;
	margin: 1rem 0;
	img {
		width: 96px;
		height: 96px;
		border-radius: 200px;
		margin: 20px 0px;
	}

	h3 {
		color: #252b42;
		font-weight: bold;
		font-size: 24px;
		letter-spacing: 0.2px;
		margin: 8px 0;
	}

	p {
		font-weight: 600;
		font-size: 14px;
		color: #737373;
		letter-spacing: 0.2px;
		margin: 4px 0;
	}

	svg {
		cursor: pointer;
		color: #134087;
		font-size: 2rem;
	}
`;
