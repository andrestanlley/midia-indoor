import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-image: url('./background-2.png');
	background-repeat: no-repeat;
	background-size: cover;
	height: 100vh;
	color: var(--branco);

	img {
		width: 25rem;
	}

	div {
		margin-top: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 12px;

        a {
            cursor: pointer;
            text-decoration: none;
        }

		p {
			font-weight: 500;
			font-size: 16px;
		}
	}
`;
