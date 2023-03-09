import styled from "styled-components";

export const ListOption = styled.div`
	display: flex;
	justify-content: space-between;
	line-height: 0;
	align-items: center;

	p {
		:hover {
			opacity: 0.6;
			cursor: pointer;
		}
	}

	label {
		width: 80%;
		overflow: hidden;
		cursor: pointer;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	input[type="checkbox"] {
		margin: 0 4px;
		padding: 0;
		line-height: 0;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 30%;
	max-height: 7rem;
	overflow-y: scroll;

	@media (max-width: 1040px) {
		width: 100%;
	}

	span {
		text-align: center;
		color: var(--title);
		font-size: 14px;
	}

	::-webkit-scrollbar {
		display: none;
	}

	input {
		margin-bottom: 8px;
	}
`;
