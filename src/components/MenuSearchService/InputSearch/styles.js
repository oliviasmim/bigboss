import styled from "styled-components";

<<<<<<< HEAD
export const SearchContainer = styled.div`
  margin: 0 auto;
  width: 95vw;
  height: 70px;
  background-color: #ffffff;
  margin-bottom: 10px;
  box-shadow: 0px 2px 2px 0px rgb(0 0 0 / 25%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (min-width: 600px) {
    width: 100%;
  }
`;
=======
export const InputContainer = styled.div`
    border: 1px solid transparent;
    background-color: #EFF0F6;
    width: 80%;
    height: 40px;
    font-weight: 500;
    font-size: 1rem;
    border-radius: 8px;
    display: ${(props) => props.displayNone ? "none" : "flex"};
    overflow: hidden;
    padding: 0 6px;
    justify-content: space-between;
    @media (min-width: 600px){
        display: flex;
        width: 15%;
    }
    input{
        border: 1px solid transparent;
        background-color: #EFF0F6;
        width: 80%;
        &::placeholder{
            color: #D6D7E3;
        }
    }
        &:focus{
            border: 1px solid #5887FF;
        }
        &:active{
            border: 1px solid #5887FF;
        }
        &:hover{
            border: 1px solid #5887FF;
        } 
    
    button {
        height: 100%;
        width: 20%;
/* 
        padding: 3px;

        padding: 6px; */

        padding: 3px;

    }
    svg{
        color: #D6D7E3;
        height: 100%;
        max-width: 100%;
    }
`
>>>>>>> 96e8306929106f5e2b6c51c3d96afa2397262e52
