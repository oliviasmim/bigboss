import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  height: 220px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 25%);
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Badge = styled.span`
	text-align: center;
    padding: .1rem .3rem;
	width: 80px;
	height: 20px;
	font-size: 12px;
	color: rgb(23, 22, 54);
	background: ${(props) =>
		props.text === "Potencial"
			? "rgba(87, 134, 255, 0.71)"
			: props.text === "Trabalhando"
			? "rgba(197, 202, 43, 0.98)"
			: "rgba(24, 146, 22, 0.87)"};
	font-weight: 500;
	border-radius: 10px;
`;

export const Image = styled.figure`
  height: 58px;
  width: 58px;
  border: 1px solid #eeeeee;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 44px;
    height: 44px;
    border-radius: 6px;
  }
`;

export const CardContent = styled.div`
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  padding: 0.75rem 0;

  h4 {
    font-weight: 700;
    font-size: 1rem;
    color: #171717;
    cursor: pointer;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    color: #767676;
  }
`;
