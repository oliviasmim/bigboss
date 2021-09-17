import styled from "styled-components";

export const FooterContainer = styled.footer`
	@media (min-width: 600px) {
		width: 100%;
	}
	width: calc(100% - 240px);
	font-family: Inter;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	color: #b9b9b9;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-top: 1px solid #c4c4c4;
	margin-top: 20px;
`;
