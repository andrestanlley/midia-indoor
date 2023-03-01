import styled from "styled-components";

export const Container = styled.button`
	display: flex;
	align-items: center;
	color: #1e293b;
	text-decoration: none;
	background: transparent;

	div {
		display: flex;
		width: 11rem;
		flex-direction: column;
		align-items: center;
		padding: 0 8px;
		font-weight: 600;
		font-size: 20px;
		color: #1e293b;
		line-height: 1rem;
		span {
			font-weight: 300;
			font-size: 14px;
			color: #94a3b8;
		}
	}
`;
