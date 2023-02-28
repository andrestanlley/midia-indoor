import styled from "styled-components";

export const Container = styled.button`
	display: flex;
	align-items: center;
	color: #1e293b;
	background: #f8fafc;
	width: 14rem;
	border-radius: 4px;
    margin: 0px 16px;
    padding: 16px;
	text-decoration: none;

	div {
		padding-left: 8px;
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
