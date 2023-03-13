import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;

	@media (max-width: 1016px) {
		margin: 24px;
	}
`;

export const SubContainer = styled.div`
	width: 100%;
	max-width: 1016px;
	margin-top: 56px;

	#header {
		display: flex;
		justify-content: center;
		align-items: center;
		min-width: 100%;
		gap: 30px;

		@media (max-width: 1016px) {
			flex-direction: column;
		}
	}
`;
