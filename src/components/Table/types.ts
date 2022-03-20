import React from "react";

export type CellAlign = "right" | "left" | "center";

export interface TableCellProps {
    align?: CellAlign;
    children: React.ReactNode;
}

export interface TableHeadCellProps extends TableCellProps {
    onClick?: (columnIdx: string) => void;
    sortable?: boolean;
    columnIdx?: string;
}

export interface TableRowProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export interface RowLinkProps {
    to: string;
    children: React.ReactNode;
}
