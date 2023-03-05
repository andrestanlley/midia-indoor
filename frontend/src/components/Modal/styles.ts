import styled from "styled-components";

export const BlackBackground = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 5;
	background: rgba(0, 0, 0, 0.7);
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
`;

export const ModalHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: var(--title);

	button {
		background: transparent;
	}

	input {
		font-size: 24px;
		font-weight: 600;
		background: transparent;
		max-width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		border: 0;
		outline: none;
		
		::placeholder{
			color: var(--title);
		}
	}
`;

export const ModalContent = styled.div`
	display: flex;
	padding: 16px;

	section {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow-x: hidden;
		margin-top: 12px;
		height: 20rem;
		overflow-y: scroll;
		::-webkit-scrollbar {
			display: none;
		}
	}

	#applyButton {
		margin-top: 12px;
		background: var(--cinza-um);
		padding: 4px 6px;
		border-radius: 4px;
		color: var(--title);
		font-weight: 600;
	}

	label {
		cursor: pointer;
		display: flex;
		align-items: center;
		margin: 0;
		padding: 0;
		input[type="radio"] {
			margin-right: 4px;
		}
	}

	flex-direction: column;
	width: 700px;
	background: var(--cinza-dois);
	border-radius: 4px;
	opacity: 1;
	z-index: 7;
`;
