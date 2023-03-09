import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;

    img {
        width: 7rem;
    }
`;

export const LoginBox = styled.div`
	display: flex;
	flex-direction: column;
	background: var(--cinza-dois);
	padding: 24px;
	border-radius: 16px;
	color: var(--title);

	input {
		margin-bottom: 12px;
		height: 2rem;
		width: 13rem;
		border: 1px solid var(--cinza-um);
		border-radius: 4px;
        outline: none;
        padding: 4px;
        font-size: 16px;
	}

    button {
        height: 2rem;
        background: var(--subtitle);
        border-radius: 0 4px 0 4px;
        color: var(--title);
        font-weight: 600;
    }
`;
