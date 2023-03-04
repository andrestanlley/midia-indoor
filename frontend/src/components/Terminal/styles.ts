import styled from "styled-components";

export const Container = styled.button`
	display: flex;
	align-items: center;
	color: var(--title);
	text-decoration: none;
	background: transparent;

	div {
		display: flex;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		width: 11rem;
		flex-direction: column;
		align-items: center;
		padding: 0 8px;
		font-weight: 600;
		font-size: 20px;
		color: var(--title);
		line-height: 1rem;

		span {
			font-weight: 300;
			font-size: 14px;
			color: var(--subtitle);
		}
	}
`;
