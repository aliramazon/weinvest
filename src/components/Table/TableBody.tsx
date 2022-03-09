import styled from 'styled-components';

export const TableBody = styled.div`
    // height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        background-color: var(--colorWhite);
        width: 5px;
    }
    &::-webkit-scrollbar-track {
        background: var(--colorWhite);
    }
    &::-webkit-scrollbar-thumb {
        background: var(--generalColor-40);
    }
    // for IE
    body {
        scrollbar-face-color: #c1cbd0;
        scrollbar-track-color: #ffffff;
    }
`;
