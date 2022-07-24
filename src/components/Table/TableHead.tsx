import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TableRowBase } from "./TableRow";
import { SortDirection, TableHeadProps } from "./types";

const TableHeadBase = styled.div`
    border-bottom: 0.2rem solid var(--generalColor-40);
    width: 100%;
    background-color: var(--whiteColor);
    z-index: 1;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
`;

export const TableHead: React.FC<TableHeadProps> = ({
    children,
    onSort,
    id
}) => {
    const [sortDirection, setSortDirection] = useState<SortDirection>(
        SortDirection.ASC
    );
    const [activeColumnIdx, setActiveColumnIdx] = useState<string>("");
    const handleOnClick = (columnIdx: string) => {
        onSort &&
            onSort(
                columnIdx === activeColumnIdx
                    ? sortDirection === SortDirection.ASC
                        ? SortDirection.DESC
                        : SortDirection.ASC
                    : SortDirection.ASC,
                columnIdx
            );
        setSortDirection((prevDirection: SortDirection) => {
            if (columnIdx === activeColumnIdx) {
                return prevDirection === SortDirection.ASC
                    ? SortDirection.DESC
                    : SortDirection.ASC;
            }
            return SortDirection.ASC;
        });
        setActiveColumnIdx(columnIdx);
    };

    useEffect(() => {
        if (id) setActiveColumnIdx("");
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
