import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-image: url('./background-3.png');
	background-size: cover;
	background-repeat: no-repeat;

	img {
		width: 13rem;
	}
`;

export const LoginBox = styled.div`
	display: flex;
	flex-direction: column;
	background: var(--cinza-dois);
	padding: 36px;
	border-radius: 16px;
	color: var(--title);
	position: relative;
	margin-bottom: 3rem;

	div {
		display: flex;
		justify-content: center;
		position: absolute;
		top: -17%;
		width: 100%;
		left: 0;

		img {
			width: 5rem;
			border-radius: 50%;
			background: var(--cinza-dois);
		}
	}

	input, button {
		margin-top: 12px;
		height: 2.5rem;
		width: 15rem;
		outline: none;
		padding: 8px;
		font-size: 16px;
		background: var(--cinza-um);
		border-radius: 16px;
		font-weight: 600;

		::placeholder {
			text-align: center;
			font-weight: 600;
		}
	}

	button {
		font-weight: 600;
		background: var(--primary);
		color: var(--branco);
	}
`;
