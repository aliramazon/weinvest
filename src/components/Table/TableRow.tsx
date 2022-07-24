import React from "react";
import styled from "styled-components";
import { TableRowProps } from "./types";

export const TableRowBase = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    padding: 0 0.8rem;
`;

const TableBodyRowBase = styled(TableRowBase)`
    border-bottom: 0.1rem solid var(--generalColor-40);
`;

export const TableRow: React.FC<TableRowProps> = ({ children, onClick }) => {
    const handleOnClick = () => {
        onClick && onClick();
    };
    return (
        <TableBodyRowBase onClick={handleOnClick}>{children}</TableBodyRowBase>
    );
};
