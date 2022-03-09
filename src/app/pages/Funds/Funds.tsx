import { useEffect } from 'react';
import styled from 'styled-components';
import {
    MainLayout,
    AppContentHeader,
    Card,
    Table,
    TableHead,
    TableBody,
    TableBodyCell,
    TableHeadCell,
    TableRow
} from '../../../components';
import { useStore } from '../../../context/AppContext';
import { Actions } from '../../../store';
import { Fund } from '../../../mocks';

const TableCard = styled(Card)`
    // height: calc(100% - 80px);
    min-height: 0;
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
        <MainLayout>
            <AppContentHeader title="Funds"></AppContentHeader>
            <TableCard>
                <Table>
                    <TableHead>
                        <TableHeadCell>Fund Name</TableHeadCell>
                        <TableHeadCell>Total Investment</TableHeadCell>
                        <TableHeadCell>Highest Investment</TableHeadCell>
                        <TableHeadCell>Highest Invested In</TableHeadCell>
                        <TableHeadCell>Highest Multiple</TableHeadCell>
                        <TableHeadCell>Multiple Company</TableHeadCell>
                    </TableHead>
                    <TableBody>
                        {data &&
                            Object.values(data).map((fund: Fund) => {
                                return (
                                    <TableRow key={fund.id}>
                                        <TableBodyCell>
                                            {fund.name}
                                        </TableBodyCell>
                                        <TableBodyCell>
                                            {fund.totalInvested}
                                        </TableBodyCell>
                                        <TableBodyCell>
                                            {fund.highest?.investedAmount}
                                        </TableBodyCell>
                                        <TableBodyCell>
                                            {fund.highest?.investedCompany}
                                        </TableBodyCell>
                                        <TableBodyCell>
                                            {fund.highest?.multiple}
                                        </TableBodyCell>
                                        <TableBodyCell>
                                            {fund.highest?.multipleCompany}
                                        </TableBodyCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableCard>
        </MainLayout>
    );
};
