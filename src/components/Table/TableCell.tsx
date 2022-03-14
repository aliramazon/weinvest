import styled from 'styled-components';
import { CellAlign } from './types';

export const TableCell = styled.div<{ align?: CellAlign }>`
    height: 5.2rem;
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.align ? props.align : 'left')};

    font-size: var(--font-size-2);
    font-weight: var(--font-weight-300);
`;
