import styled from "styled-components";

export const PageContainer = styled.section`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FAFAFA;
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

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 600px){
        flex-direction: row;
    }
`

export const Card = styled.div`
    width: 300px;
    height: 200px;
    display: flex;
    border: 1px solid #134087;
    border-radius: 10px;
    padding: 1rem;
    margin: 1rem;
    @media (min-width: 600px){
        width: 360px;
    }
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    h3 {
        font-weight: bold;
        font-size: 24px;
        color: #134087;
    }
    p {
        color: #737373;
        font-size: 1rem;
        font-weight: 500;
    }
    img {
        width: 120px;
    }
`

export const Avatar = styled.img`
    width: 80px;
    height: 80px;
    margin: 8px;
`


