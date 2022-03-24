import styled from 'styled-components';
import { TableCell } from './TableCell';
import { TableHeadCellProps } from './types';
import chevronDown from './chevronDown.svg';
import chevronUp from './chevronUp.svg';

const TableHeadCellBase = styled(TableCell)<{ sortable?: boolean }>`
    color: var(--generalColor-80);
    height: 4.4rem;
    cursor: ${(props) => (props.sortable ? 'pointer' : 'auto')};
    gap: var(--spacing-2);
`;

export const TableHeadCell: React.FC<TableHeadCellProps> = ({
    align,
    children,
    sortable,
    columnIdx,
    sortDirection,
    activeColumnIdx,
    onClick
}) => {
    return (
        <TableHeadCellBase
            align={align}
            sortable={sortable}
            onClick={() => {
                onClick && columnIdx && onClick(columnIdx);
            }}
        >
            {children}
            {sortable &&
                columnIdx === activeColumnIdx &&
                (sortDirection === 'ASC' ? (
                    <img src={chevronUp} alt="↑" />
                ) : (
                    <img src={chevronDown} alt="↓" />
                ))}
        </TableHeadCellBase>
    );
};
