import styled from "styled-components";

export const PageContainer = styled.section`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 600px){
        display: none;
    }
`
export const ContainerImg = styled.div`
    width: 75%;
    @media (min-width: 600px){
        width: 90%;
    }
`

export const ImageDesktop = styled.img`
    width: 100%;
    @media (max-width: 600px){
        display: none;
    }
`

export const TitleHeader = styled.div`
    width: 85%;
    text-align: center;
    margin: 3rem 0;
    margin-top: 4rem;
    h3 {
        font-weight: bold;
        font-size: 40px;
        color: #171717;
        margin: 1rem 0;
    }

    p{
        color: #737373;
        font-weight: 500;
        font-size: 1rem;
        padding: 0 1rem;
    }
`


