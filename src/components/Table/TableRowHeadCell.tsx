import styled from 'styled-components';
import { TableCell } from './TableCell';
import { TableCellProps } from './types';

const TableRowHeadCellBase = styled(TableCell)`
    color: var(--generalColor-100);
    font-weight: var(--font-weight-400);
`;

export const TableRowHeadCell: React.FC<TableCellProps> = ({
    align,
    children
}) => {
    return (
        <TableRowHeadCellBase align={align}>{children}</TableRowHeadCellBase>
    );
};
