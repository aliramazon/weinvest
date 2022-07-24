import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import { RowLink } from "../../../components";
import styled from "styled-components";

import {
    AppContentHeader,
    Card,
    Table,
    TableHead,
    TableBody,
    TableBodyCell,
    TableHeadCell,
    TableRow
} from "../../../components";
import { useStore } from "../../../context";
import { Actions } from "../../../store";
import { Company } from "../../../types";

const Container = styled.div`
    display: flex;
    gap: var(--spacing-7);
    height: calc(100% - 8rem);
`;

const CompaniesCard = styled(Card)`
    flex-basis: 30rem;
    flex-shrink: 0;
`;

export const Companies = () => {
    const {
        state: {
            companies: { data }
        },
        dispatch
    } = useStore();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        dispatch({
            type: Actions.FETCH_COMPANIES_DATA
        });
    }, [dispatch]);

    useEffect(() => {
        if (data && location.pathname === "/companies") {
            const firstCompanyId = Object.keys(data)[0];
            navigate(`/companies/${firstCompanyId}`);
        }
    }, [data, location.pathname, navigate]);

    return (
        <>
            <AppContentHeader title="Companies" />
            <Container>
                <CompaniesCard>
                    <Table>
                        <TableHead>
                            <TableHeadCell>Company Name</TableHeadCell>
                        </TableHead>
                        <TableBody>
                            {data &&
                                Object.values(data).map((company: Company) => {
                                    return (
                                        <RowLink
                                            to={company.id}
                                            key={company.id}
                                        >
                                            <TableRow>
                                                <TableBodyCell>
                                                    {company.info.name}
                                                </TableBodyCell>
                                            </TableRow>
                                        </RowLink>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </CompaniesCard>
                <Outlet />
            </Container>
        </>
    );
};
