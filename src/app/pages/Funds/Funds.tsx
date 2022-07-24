import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { RowLink } from "../../../components";

import {
    AppContentHeader,
    Card,
    Table,
    TableHead,
    TableBody,
    TableBodyCell,
    TableHeadCell,
    TableRow,
    Seperator
} from "../../../components";
import { useStore } from "../../../context";
import { Actions } from "../../../store";
import { Fund } from "../../../types";

const Container = styled(Card)`
    display: grid;
    grid-template-columns: 30rem 0.5rem 1fr;
    gap: var(--spacing-7);
    height: calc(100% - 8rem);
`;

export const Funds = () => {
    const {
        state: {
            funds: { data }
        },
        dispatch
    } = useStore();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    useEffect(() => {
        dispatch({
            type: Actions.FETCH_FUNDS_DATA
        });
    }, [dispatch]);

    useEffect(() => {
        if (data && location.pathname === "/funds") {
            const firstFundId = Object.keys(data)[0];
            navigate(`/funds/${firstFundId}`);
        }
    }, [data, location.pathname, navigate]);

    return (
        <>
            <AppContentHeader title="Funds" />
            <Container>
                <Table>
                    <TableHead>
                        <TableHeadCell>Fund Name</TableHeadCell>
                    </TableHead>
                    <TableBody>
                        {data &&
                            Object.values(data).map((fund: Fund) => {
                                return (
                                    <RowLink to={fund.id} key={fund.id}>
                                        <TableRow>
                                            <TableBodyCell>
                                                {fund.name}
                                            </TableBodyCell>
                                        </TableRow>
                                    </RowLink>
                                );
                            })}
                    </TableBody>
                </Table>
                <Seperator />
                <Outlet />
            </Container>
        </>
    );
};
