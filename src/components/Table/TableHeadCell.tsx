import styled from 'styled-components';
import { TableCell } from './TableCell';
import { TableCellProps } from './types';

const TableHeadCellBase = styled(TableCell)`
    color: var(--generalColor-80);
    height: 4.4rem;
`;

export const TableHeadCell: React.FC<TableCellProps> = ({
    align,
    children
}) => {
    return <TableHeadCellBase align={align}>{children}</TableHeadCellBase>;
};
