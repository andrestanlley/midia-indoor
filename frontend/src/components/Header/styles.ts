import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	margin-top: 42px;

	@media (max-width: 1040px) {
		flex-direction: column;
		gap: 32px;
	}
`;

export const SubContainer = styled.div`
	display: flex;
	width: 45.3rem;

	@media (max-width: 1040px) {
		flex-direction: column;
		max-width: 12.7rem;
	}
`;
