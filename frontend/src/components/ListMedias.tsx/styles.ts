import styled from "styled-components";

export const ListOption = styled.div`
	display: flex;
	justify-content: space-between;
	line-height: 0;
	align-items: center;
	width: 10rem;

	p {
		:hover{
			opacity: 0.6;
			cursor: pointer;
		}
	}

	input[type="checkbox"] {
		margin: 0 4px;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 10rem;

	input {
		margin-bottom: 8px;
	}

	div {
		::-webkit-scrollbar {
			display: none;
		}
		max-height: 6rem;
		overflow-y: scroll;
	}
`;
