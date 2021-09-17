import styled from "styled-components";

export const ContainerContent = styled.div`
	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		//width: 60%;
	}
`;
export const TitleForm = styled.p`
	color: var(--blue);
	font-size: 1.3rem;
	text-align: center;
	font-weight: bold;
	margin-bottom: 0.6rem;
	margin-top: 0.6rem;
`;
export const FlexOrcamentoVF = styled.div`
	@media (min-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 25vw;
		margin-bottom: 0.5rem;
		//width: 100%;
	}
`;
export const ContentColumnLarge = styled.div`
	margin-bottom: 0.5rem;
	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		width: 25vw;
	}
`;
export const ContentColumnLargeFlex = styled.div`
	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		width: 45%;
	}
`;
export const TitleService = styled.div`
	color: blue;
	font-size: 0.9rem;
	text-align: center;
	font-weight: bold;
	margin-bottom: 0.5rem;
`;
export const ButtonsGroup = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin: 1rem 0;
	@media (min-width: 768px) {
		align-items: flex-end;
		justify-content: flex-end;
		margin: 1rem 2rem;
	}
	@media (min-width: 1024px) {
		margin: 1rem 5rem;
	}
`;
export const ButtonBox = styled.div`
	margin-right: 1rem;
`;
