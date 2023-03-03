import styled from "styled-components";

export const BlackBackground = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 5;
	background: rgba(0,0,0,0.7);
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
`;

export const ModalContent = styled.div`
	display: flex;
	
	flex-direction: column;
	width: 700px;
	background: var(--cinza-dois);
	border-radius: 4px;
	opacity: 1;
	z-index: 7;
`;
