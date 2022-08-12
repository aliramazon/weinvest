import styled from "styled-components";
import { TableCell } from "./TableCell";
import { TableCellProps } from "./types";

const TableBodyCellBase = styled(TableCell)`
    color: var(--generalColor-100);
`;

export const TableBodyCell: React.FC<TableCellProps> = ({
    align,
    children
}) => {
    return <TableBodyCellBase align={align}>{children}</TableBodyCellBase>;
};
