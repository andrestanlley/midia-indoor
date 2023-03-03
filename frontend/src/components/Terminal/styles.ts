import styled from "styled-components";

export const Container = styled.button`
	display: flex;
	align-items: center;
	color: var(--title);
	text-decoration: none;
	background: transparent;

	form {
		display: flex;
		width: 11rem;
		flex-direction: column;
		align-items: center;
		padding: 0 8px;
		font-weight: 600;
		font-size: 20px;
		line-height: 0.3rem;
		
		input {
			font-size: 20px;
			font-weight: 600;
			text-align: center;
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
		span {
			font-weight: 300;
			font-size: 14px;
			color: var(--subtitle);
		}
	}
`;
