import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: "Inter", sans-serif;
    }

    :root{
        --white:#f5f5f5;
        --black:#0c0d0d;
        --white-gray:#EAF0FC;
        --blue: #134087;
    }

`;
