import styled from 'styled-components';
import { TableCell } from './TableCell';
import { TableCellProps } from './types';

export const TableBodyCellBase = styled(TableCell)`
    color: var(--generalColor-100);
`;

export const TableBodyCell: React.FC<TableCellProps> = ({
    align,
    children
}) => {
    return <TableCell align={align}>{children}</TableCell>;
};
