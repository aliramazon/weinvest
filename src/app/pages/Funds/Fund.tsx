import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
    Table,
    TableHead,
    TableBody,
    TableBodyCell,
    TableRowHeadCell,
    TableHeadCell,
    TableRow,
    Badge
} from '../../../components';
import { useStore } from '../../../context/AppContext';

import { Actions } from '../../../store';
import { roundNumber, formatPercentage, formatFunds } from '../../../utils';

export const Fund = () => {
    const [sortDirection, setSortDirection] = useState<'ASC' | 'DESC'>();
    const [activeColumnIdx, setActiveColumnIdx] = useState<string>('');
    const {
        state: {
            funds: { data }
        },
        dispatch
    } = useStore();
    const { fundId } = useParams();

    useEffect(() => {
        setActiveColumnIdx('');
    }, [fundId]);

    const onSort = (columnIdx: string) => {
        dispatch({
            type: Actions.SORT_FUNDS_INVESTEDIN,
            payload: {
                fundId: fundId!,
                columnIdx: columnIdx,
                sortDirection:
                    columnIdx === activeColumnIdx
                        ? sortDirection === 'ASC'
                            ? 'DESC'
                            : 'ASC'
                        : 'ASC'
            }
        });
        setSortDirection((prevDirection) => {
            if (columnIdx === activeColumnIdx) {
                return prevDirection === 'ASC' ? 'DESC' : 'ASC';
            }
            return 'ASC';
        });
        setActiveColumnIdx(columnIdx);
    };

    return (
        <Table>
            <TableHead>
                <TableHeadCell>Company</TableHeadCell>
                <TableHeadCell>Invested Round</TableHeadCell>
                <TableHeadCell
                    columnIdx="investedAmount"
                    sortable
                    onClick={onSort}
                    sortDirection={sortDirection}
                    activeColumnIdx={activeColumnIdx}
                >
                    Invested Amount
                </TableHeadCell>
                <TableHeadCell
                    columnIdx="ownershipPercentage"
                    sortable
                    onClick={onSort}
                    sortDirection={sortDirection}
                    activeColumnIdx={activeColumnIdx}
                >
                    Ownership
                </TableHeadCell>
                <TableHeadCell
                    columnIdx="impliedValue"
                    sortable
                    onClick={onSort}
                    sortDirection={sortDirection}
                    activeColumnIdx={activeColumnIdx}
                >
                    Implied Value
                </TableHeadCell>
                <TableHeadCell
                    columnIdx="multiple"
                    sortable
                    onClick={onSort}
                    sortDirection={sortDirection}
                    activeColumnIdx={activeColumnIdx}
                >
                    Multiple
                </TableHeadCell>
            </TableHead>
            <TableBody>
                {fundId &&
                    data &&
                    data[fundId].investedIn.map((company) => {
                        return (
                            <TableRow key={company.id}>
                                <TableRowHeadCell>
                                    {company.name}
                                </TableRowHeadCell>
                                <TableBodyCell>
                                    <Badge color="green" light>
                                        {company.investedRound}
                                    </Badge>
                                </TableBodyCell>
                                <TableBodyCell>
                                    {formatFunds(company.investedAmount)}
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Badge>
                                        {formatPercentage(
                                            company.ownershipPercentage
                                        )}
                                    </Badge>
                                </TableBodyCell>
                                <TableBodyCell>
                                    {formatFunds(company.impliedValue)}
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Badge color="blue">
                                        {roundNumber(company.multiple)}
                                    </Badge>
                                </TableBodyCell>
                            </TableRow>
                        );
                    })}
            </TableBody>
        </Table>
    );
};
