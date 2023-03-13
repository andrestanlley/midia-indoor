import styled from "styled-components";

export const ListOption = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	div {
		display: flex;
		justify-content: center;
		align-items: center;

		p {
			:hover {
				opacity: 0.6;
				cursor: pointer;
			}
		}
	}

	label {
		overflow: hidden;
		cursor: pointer;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	#datepicker {
		margin: 0;
		padding: 0;

		::-webkit-datetime-edit {
			display: none;
		}

		::-webkit-calendar-picker-indicator {
			margin: 0;
			padding: 0;
			filter: invert(60%) sepia(4%) saturate(514%) hue-rotate(183deg)
				brightness(93%) contrast(101%);
		}
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
	justify-content: space-between;
	width: 50%;
	height: 13rem;
	overflow-y: scroll;

	div {
		max-height: 9rem;
		overflow-y: scroll;

		::-webkit-scrollbar {
			display: none;
		}
	}

	@media (max-width: 1040px) {
		width: 100%;
	}

	::-webkit-scrollbar {
		display: none;
	}

	span {
		text-align: center;
		color: var(--title);
		font-size: 14px;
	}

	input {
		background: transparent;
		outline: none;
		border: 0;
	}

	button {
		background: var(--primary);
		color: var(--branco);
		font-weight: 600;
		height: 2rem;
		border-radius: 16px;
	}
`;
