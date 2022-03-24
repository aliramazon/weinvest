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
    const {
        state: {
            funds: { data }
        },
        dispatch
    } = useStore();
    const { fundId } = useParams();

    const onSort = (sortDirection: 'ASC' | 'DESC', columnIdx: string) => {
        dispatch({
            type: Actions.SORT_FUNDS_INVESTEDIN,
            payload: {
                fundId: fundId!,
                columnIdx: columnIdx,
                sortDirection: sortDirection
            }
        });
    };

    return (
        <Table>
            <TableHead onSort={onSort} id={fundId}>
                <TableHeadCell>Company</TableHeadCell>
                <TableHeadCell>Invested Round</TableHeadCell>
                <TableHeadCell columnIdx="investedAmount" sortable>
                    Invested Amount
                </TableHeadCell>
                <TableHeadCell columnIdx="ownershipPercentage" sortable>
                    Ownership
                </TableHeadCell>
                <TableHeadCell columnIdx="impliedValue" sortable>
                    Implied Value
                </TableHeadCell>
                <TableHeadCell columnIdx="multiple" sortable>
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
