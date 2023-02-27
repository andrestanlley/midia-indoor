import styled from "styled-components";

export const BlackBackground = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 5;
	background: #000000;
	width: 100vw;
	height: 100vh;
	opacity: 0.7;

	div {
		background: red;
        width: 700px;
	}
`;
