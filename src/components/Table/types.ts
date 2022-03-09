import React from 'react';

export type CellAlign = 'right' | 'left' | 'center';

export interface TableCellProps {
    align?: CellAlign;
    children: React.ReactNode;
}

export interface TableRowProps {
    children: React.ReactNode;
}
