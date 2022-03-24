import React from 'react';

export type CellAlign = 'right' | 'left' | 'center';
export enum SortDirection {
    ASC = 'ASC',
    DESC = 'DESC'
}

export interface TableHeadProps {
    children: JSX.Element[] | JSX.Element;
    onSort?: (sortDirection: SortDirection, columnIdx: string) => void;
    id?: string;
}
export interface TableCellProps {
    align?: CellAlign;
    children: React.ReactNode;
}

export interface TableHeadCellProps extends TableCellProps {
    onClick?: (columnIdx: string) => void;
    sortable?: boolean;
    columnIdx?: string;
    sortDirection?: SortDirection;
    activeColumnIdx?: string;
}

export interface TableRowProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export interface RowLinkProps {
    to: string;
    children: React.ReactNode;
}
