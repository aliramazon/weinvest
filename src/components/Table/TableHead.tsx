import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TableRowBase } from './TableRow';

const TableHeadBase = styled.div`
    border-bottom: 0.2rem solid var(--generalColor-40);
    width: 100%;
`;

interface TableHeadProps {
    children: JSX.Element[] | JSX.Element;
    onSort?: (sortDirection: 'ASC' | 'DESC', columnIdx: string) => void;
    id?: string;
}
export const TableHead: React.FC<TableHeadProps> = ({
    children,
    onSort,
    id
}) => {
    const [sortDirection, setSortDirection] = useState<'ASC' | 'DESC'>();
    const [activeColumnIdx, setActiveColumnIdx] = useState<string>('');
    const handleOnClick = (columnIdx: string) => {
        onSort &&
            onSort(
                columnIdx === activeColumnIdx
                    ? sortDirection === 'ASC'
                        ? 'DESC'
                        : 'ASC'
                    : 'ASC',
                columnIdx
            );
        setSortDirection((prevDirection) => {
            if (columnIdx === activeColumnIdx) {
                return prevDirection === 'ASC' ? 'DESC' : 'ASC';
            }
            return 'ASC';
        });
        setActiveColumnIdx(columnIdx);
    };

    useEffect(() => {
        if (id) setActiveColumnIdx('');
    }, [id]);

    const cells = React.Children.map(children, (child: JSX.Element) => {
        return React.cloneElement(child, {
            onClick: handleOnClick,
            sortDirection: sortDirection,
            activeColumnIdx: activeColumnIdx
        });
    });

    return (
        <TableHeadBase>
            <TableRowBase>{cells}</TableRowBase>
        </TableHeadBase>
    );
};
