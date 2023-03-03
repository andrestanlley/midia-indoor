import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 15rem;


    input {
        margin-bottom: 8px;
        background: transparent;
        border: 0;
        outline: none;
    }

    div {
        ::-webkit-scrollbar {
            display: none;
        }
        max-height: 6rem;
        overflow-y: scroll;
    }
`;
