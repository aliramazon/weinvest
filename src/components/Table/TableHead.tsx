import React from 'react';
import styled from 'styled-components';
import { TableRowBase } from './TableRow';

const TableHeadBase = styled.div`
    border-bottom: 0.2rem solid var(--generalColor-40);
`;

export const TableHead: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    return (
        <TableHeadBase>
            <TableRowBase>{children}</TableRowBase>
        </TableHeadBase>
    );
};
