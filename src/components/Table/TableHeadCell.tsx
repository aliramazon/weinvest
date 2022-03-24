import { useState } from 'react';
import styled, { css } from 'styled-components';
import { TableCell } from './TableCell';
import { TableHeadCellProps, SortDirection } from './types';
import chevronUp from './chevronUp.svg';

const TableHeadCellBase = styled(TableCell)<{ sortable?: boolean }>`
    color: var(--generalColor-80);
    height: 4.4rem;
    cursor: ${(props) => (props.sortable ? 'pointer' : 'auto')};
    gap: var(--spacing-2);
`;

const SortIcon = styled.img<{ isDescending: boolean }>`
    transition: transform 200ms;
    ${(props) =>
        props.isDescending &&
        css`
            transform: rotate(180deg);
        `};
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
    const [hovered, setHovered] = useState<boolean>(false);
    const showSortIcon =
        (sortable && columnIdx === activeColumnIdx) || (sortable && hovered);
    return (
        <TableHeadCellBase
            align={align}
            sortable={sortable}
            onClick={() => {
                onClick && columnIdx && onClick(columnIdx);
            }}
            onMouseOver={() => {
                sortable &&
                    !(columnIdx === activeColumnIdx) &&
                    setHovered(true);
            }}
            onMouseLeave={() => setHovered(false)}
        >
            {children}
            {showSortIcon && (
                <SortIcon
                    src={chevronUp}
                    alt={'↕'}
                    isDescending={
                        sortDirection === SortDirection.DESC && !hovered
                    }
                />
            )}
        </TableHeadCellBase>
    );
};
