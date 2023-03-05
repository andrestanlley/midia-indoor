import styled from "styled-components";

export const Container = styled.div`
	background: var(--cinza-dois);
	border-radius: 0.25rem;
	max-width: max-content;
    position: relative;
	padding: 16px;
	margin: 12px;
`;

export const Title = styled.h1`
    position: absolute;
    top: -40px;
    left: 0px;
    color: var(--title);
`;
