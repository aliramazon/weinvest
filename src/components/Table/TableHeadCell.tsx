import styled from "styled-components";
import { TableCell } from "./TableCell";
import { TableHeadCellProps } from "./types";

const TableHeadCellBase = styled(TableCell)`
    color: var(--generalColor-80);
    height: 4.4rem;
`;

export const TableHeadCell: React.FC<TableHeadCellProps> = ({
    align,
    children,
    onClick,
    sortable,
    columnIdx
}) => {
    return <TableHeadCellBase align={align}>{children}</TableHeadCellBase>;
};
