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
        --black:#161624;
        --white-gray:#EAF0FC;
        --gray: #767676;
        --blue: #134087;
    }
`;
