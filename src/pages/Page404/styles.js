import styled from "styled-components";

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 70%;
        height: 70%;
    }

    p {
        font-style: normal;
        font-weight: bold;
        font-size: 1.5rem;
        text-align: center;
        letter-spacing: 1px;
        color: #767676;
    }
`

export const ButtonContainer = styled.div`
    margin-top: 20px;
    width: 150px;
`