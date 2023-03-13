import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	
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
		height: 12rem;
		overflow-y: scroll;
		
		p {
			cursor: pointer;
		}
	}

	@media (max-width: 1040px) {
		width: 100%;
		button {
			margin-bottom: 8px;
		}
	}
`;
