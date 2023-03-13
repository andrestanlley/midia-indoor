import styled from "styled-components";

export const Container = styled.div`
	background: var(--cinza-dois);
	border-radius: 0.25rem;
	max-width: max-content;
	position: relative;
    width: 100%;
	padding: 16px;
`;

export const Title = styled.h1`
    font-size: 2rem;
	position: absolute;
	top: -47px;
	left: 0;
    margin-bottom: .5rem;
    color: var(--title);
`;
