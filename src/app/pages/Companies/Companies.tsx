import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { RowLink } from '../../../components';
import styled from 'styled-components';

import {
    AppContentLayout,
    AppContentHeader,
    TableCard,
    Table,
    TableHead,
    TableBody,
    TableBodyCell,
    TableHeadCell,
    TableRow
} from '../../../components';
import { useStore } from '../../../context/AppContext';
import { Actions } from '../../../store';
import { Company } from '../../../mocks';

const Container = styled.div`
    display: grid;
    grid-template-columns: 30rem 1fr;
    gap: var(--spacing-7);
    min-height: 0;
`;

export const Companies = () => {
    const {
        state: {
            companies: { data }
        },
        dispatch
    } = useStore();

    useEffect(() => {
        dispatch({
            type: Actions.FETCH_COMPANIES_DATA
        });
    }, [dispatch]);

    return (
        <AppContentLayout>
            <AppContentHeader title="Companies" />
            <Container>
                <TableCard>
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
                </TableCard>
                <Outlet />
            </Container>
        </AppContentLayout>
    );
};
