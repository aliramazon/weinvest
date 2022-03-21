import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { RowLink } from '../../../components';

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
import { useStore } from '../../../context';
import { Actions } from '../../../store';
import { Fund } from '../../../mocks';

const Container = styled(TableCard)`
    display: grid;
    grid-template-columns: 30rem 0.5rem 1fr;
    gap: var(--spacing-7);
`;

export const Funds = () => {
    const {
        state: {
            funds: { data }
        },
        dispatch
    } = useStore();

    useEffect(() => {
        dispatch({
            type: Actions.FETCH_FUNDS_DATA
        });
    }, [dispatch]);

    return (
        <AppContentLayout>
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
        </AppContentLayout>
    );
};
