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
	margin-bottom: 12px;
	background: var(--primary);
	padding: 12px;

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
		color: var(--branco);
		
		::placeholder{
			color: var(--branco);
		}
	}
`;

export const ModalContent = styled.div`
	display: flex;
	max-width:30rem;

	@media (max-width: 1040px) {
		width: 90%;
	}

	div {
		display: flex;
	}

	#actualMedia {
		flex-direction: column;
		padding: 12px;
	}

	section {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow-x: hidden;
		padding: 12px;
		max-height: 6rem;
		overflow-y: scroll;
		::-webkit-scrollbar {
			display: none;
		}
	}

	#applyButton {
		margin-top: 12px;
		background: var(--primary);
		border-radius: 16px;
		margin: 12px;
		height: 2rem;
		color: var(--branco);
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
	background: var(--cinza-dois);
	border-radius: 4px;
	opacity: 1;
	z-index: 7;
`;
