import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 24px;

	span {
		width: 100%;
		text-align: center;
	}
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 12px 0;

	div {
		display: flex;
		margin-left: 12px;

		div {
			display: flex;
			flex-direction: column;
			align-items: center;

			p {
				color: var(--title);
			}
			span {
				color: var(--title);
				font-weight: 600;
				font-size: 16px;
			}
		}
	}

	h1 {
		color: var(--title);
	}
`;
