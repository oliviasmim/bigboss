import styled from "styled-components";

export const PageContainer = styled.section`
	min-width: 100vw;
	min-height: 70vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	background: #fafafa;
`;

export const Header = styled.div`
	width: 100%;
	height: 120px;
	background: #134087;
	color: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	h2 {
		font-weight: bold;
		font-size: 24px;
		@media (min-width: 600px) {
			font-size: 40px;
		}
	}

	h5 {
		font-weight: 400;
		font-size: 12px;
		color: #fafafa;
	}
`;

export const CardContainer = styled.div`
	margin: 2rem 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	@media (min-width: 600px) {
		flex-direction: row;
		flex-wrap: wrap;
	}
`;
