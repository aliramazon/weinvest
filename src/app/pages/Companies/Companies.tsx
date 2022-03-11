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
    TableRow,
    Seperator
} from '../../../components';
import { useStore } from '../../../context/AppContext';
import { Actions } from '../../../store';
import { Company } from '../../../mocks';

const Container = styled(TableCard)`
    display: grid;
    grid-template-columns: 30rem 0.5rem 1fr;
    gap: var(--spacing-7);
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
                <Table>
                    <TableHead>
                        <TableHeadCell>Company Name</TableHeadCell>
                    </TableHead>
                    <TableBody>
                        {data &&
                            Object.values(data).map((company: Company) => {
                                return (
                                    <RowLink to={company.id} key={company.id}>
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
                <Seperator />
                <Outlet />
            </Container>
        </AppContentLayout>
    );
};
