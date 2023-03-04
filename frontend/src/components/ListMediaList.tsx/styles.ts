import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;

	input {
		margin-bottom: 8px;
		background: transparent;
		border: 0;
		outline: none;
	}

	button {
		background: var(--cinza-um);
		padding: 4px 6px;
		border-radius: 4px;
		color: var(--title);
		font-weight: 600;
	}

	div {
		text-overflow: ellipsis;
		white-space: nowrap;

		::-webkit-scrollbar {
			display: none;
		}
		height: 6rem;
		overflow-y: scroll;

		p {
			cursor: pointer;
		}
	}
`;
