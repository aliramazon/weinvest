import styled from 'styled-components';
import { TableCell } from './TableCell';
import { TableHeadCellProps } from './types';

const TableHeadCellBase = styled(TableCell)<{ sortable?: boolean }>`
    color: var(--generalColor-80);
    height: 4.4rem;
    cursor: ${(props) => (props.sortable ? 'pointer' : 'auto')};
`;

export const TableHeadCell: React.FC<TableHeadCellProps> = ({
    align,
    children,
    onClick,
    sortable,
    columnIdx
}) => {
    const handleOnClick = () => {
        if (sortable && columnIdx && onClick) {
            onClick(columnIdx);
        }
    };

    return (
        <TableHeadCellBase
            align={align}
            onClick={handleOnClick}
            sortable={sortable}
        >
            {children}
        </TableHeadCellBase>
    );
};
