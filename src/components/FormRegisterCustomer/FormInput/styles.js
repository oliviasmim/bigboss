import styled from "styled-components";
import InputMask from "react-input-mask";

export const InputContainer = styled.div`
    display: grid;
    /* flex-wrap: wrap; */
    /* flex-direction: row; */
    flex-grow: 1;
`
export const Label = styled.label`
	color: var(--blue);
    width: 100%;
    display: inline-flex;
    justify-content: space-between; 
`;

export const Input = styled(InputMask)`
	border-radius: 10px;
	border: ${props => props.error? "1px solid red" : "none"};
	line-height: 2rem;
	height: 2.1rem;
	padding: 0 1rem;
	margin-top: 0.5rem;
	min-width: ${(props) => (props.size ? props.size : "null")};
	text-align: center;

    @media (max-width: 366px){
        min-width: unset;
    }
`;

export const TextArea = styled.textarea`
    flex-grow: 1;
`

export const Select = styled.select`
    background-color: white;
    border: none;
    border-radius: 10px;
    &:disabled{
        background: "blue" !important;
    }
`

export const Span = styled.span`
    color: red;
    font-size: 12px;
    transform: translate(-8px, 10px)
`