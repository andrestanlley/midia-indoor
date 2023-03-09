import styled from "styled-components";

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 12px;
	width: 12.7rem;

	input[type="file"] {
		display: none;
	}

	input[type="text"] {
		background: transparent;
		color: var(--title);
		outline: none;
		border: 0;
		height: 2rem;
	}

	input[type="date"]{
		background: var(--cinza-um);
		height: 2rem;
		text-align: center;
		font-size: 1rem;
	}

	button {
		width: max-content;
		padding: 6px;
		border-radius: 4px;
		background: var(--cinza-um);
		color: var(--title);
        cursor: pointer;
	}

	span {
		text-align: center;
		color: var(--verde);
		font-size: 600;
	}

	label {
		padding: 6px 12px;
		border-radius: 4px;
        max-width: 12rem;
		height: 2rem;
		cursor: pointer;
		background: var(--cinza-um);
		display: flex;
		align-items: center;
		justify-content: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
		min-width: 100%;
	}
`;
