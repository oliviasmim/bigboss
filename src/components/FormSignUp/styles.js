import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 1024px) {
    width: 340px;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  flex-wrap: wrap;
  margin: 1rem 0 -0.5rem;
  color: var(--blue);
  font-weight: bold;
`;

export const ErrorMsg = styled.span`
  color: red;
  font-size: 12px;
`;
