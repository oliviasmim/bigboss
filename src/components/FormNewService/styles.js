import styled from "styled-components";

export const ContainerContent = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const TitleForm = styled.p`
  color: blue;
  font-size: 1.3rem;
  text-align: center;
  font-weight: bold;
`;

export const ContentColumnLarge = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
export const TitleService = styled.div`
  color: blue;
  font-size: 0.9rem;
  text-align: center;
  font-weight: bold;
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
