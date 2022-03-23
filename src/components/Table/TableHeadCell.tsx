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
    onClick,
    sortable,
    columnIdx,
    sortDirection,
    activeColumnIdx
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
            {sortable &&
                columnIdx === activeColumnIdx &&
                (sortDirection === 'ASC' ? (
                    <img src={chevronUp} />
                ) : (
                    <img src={chevronDown} />
                ))}
        </TableHeadCellBase>
    );
};
