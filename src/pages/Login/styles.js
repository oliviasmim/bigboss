import styled, { keyframes } from "styled-components";
import Login from "../../assets/login.svg";

export const Container = styled.div`
	height: 100vh;
	display: flex;
	/* align-items: stretch; */
`;

export const Background = styled.div`
	display: none;

    @media (min-width: 900px) {
		display: block;
        width: 100%;
        /* flex: 1; */
		background: url(${Login}) no-repeat center, var(--white-gray);
		background-size: contain;
		border-bottom-right-radius: 2.5rem;
		border-top-right-radius: 2.5rem;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	/* max-width: 50%; */

	/* @media screen and (max-width: 1024px) and (min-width: 321px) {
		max-width: 100%;
	}

	@media screen and (max-width: 320px) {
		max-width: 100%;
	} */
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

  form {
    margin: 0 0 80px 0;
    width: 340px;
    text-align: left;

    @media (max-width: 320px) {
      width: 80%;
      margin: 0 auto;
    }

    .span {
      color: var(--black);
      font-weight: 500;
    }
  }

  h2 {
    margin-bottom: 0.4rem;
  }

  > div {
    margin-top: 16px;
  }

  span {
    a {
      text-decoration: none;
      font-weight: bold;
      color: var(--blue);
    }
  }
`;
