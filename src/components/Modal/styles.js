import styled from "styled-components";

export const ModalBox = styled.div`
  width: 100%;
  min-height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.486);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1300;
`;

export const Container = styled.div`
  background-color: #fff;
  color: #000000;
  width: 90vw;
  //height: 55vh;
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 1024px) {
    width: 40%;
  }
`;
