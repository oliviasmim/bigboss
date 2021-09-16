import styled from "styled-components";

export const PageContainer = styled.section`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ContainerFlex = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    @media (min-width: 600px){
        flex-direction: row;
        width: 85%;
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

export const Card = styled.div`
    width: 300px;
    height: 250px;
    border: 1px solid var(--gray);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.21);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
    color: #171717;
    padding: 1rem;
    margin: 1rem 0;
    @media (min-width: 600px){
        margin: 0;
    }
`

export const H4 = styled.h4`
    font-size: 1rem;
`

export const Paragraph = styled.p`
    font-size: 0.9rem;
`