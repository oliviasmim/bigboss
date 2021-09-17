import styled, { keyframes } from "styled-components";
import Login from "../../assets/signup.svg";
import { Link } from "react-router-dom";

export const Container = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: stretch;
`;

export const Background = styled.div`
	display: none;
	width: 100%;
	@media (min-width: 900px) {
		display: block;
		/* flex: 1; */
		background: url(${Login}) no-repeat center, var(--white-gray);
		background-size: contain;
		border-bottom-left-radius: 2.5rem;
		border-top-left-radius: 2.5rem;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	/* max-width: 50%; */
`;

const appearFromLeft = keyframes`
    from{
        opacity: 0;
        transform: translateX(-50px);
    }

    to{
        opacity: 1;
        transform: translateX(0px);
    }
`;

export const AnimationContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	animation: ${appearFromLeft} 1s;
`;

export const Header = styled.div`
	width: 100%;

	.span {
		color: var(--black);
		font-weight: 500;
	}

	h2 {
		margin-bottom: 0.4rem;
	}
`;

export const RedirectMsg = styled.span`
	color: var(--gray);
	font-weight: 500;

	a {
		text-decoration: none;
	}
`;
export const LinkTo = styled(Link)`
	color: var(--blue);
`;
