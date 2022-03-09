import styled from 'styled-components';

export const TableBody = styled.div`
    height: calc(100% - 80px);
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        background-color: #eff1f4;
        width: 10px;
    }
    &::-webkit-scrollbar-track {
        background: #ffffff;
    }
    &::-webkit-scrollbar-thumb {
        background: #c1cbd0;
    }
    // for IE
    body {
        scrollbar-face-color: #c1cbd0;
        scrollbar-track-color: #ffffff;
    }
`;
