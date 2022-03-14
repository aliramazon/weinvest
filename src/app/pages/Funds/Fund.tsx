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
import { roundNumber, formatPercentage, formatFunds } from '../../../utils';

export const Fund = () => {
    const {
        state: {
            funds: { data }
        }
    } = useStore();

    const { fundId } = useParams();

    return (
        <Table>
            <TableHead>
                <TableHeadCell>Company</TableHeadCell>
                <TableHeadCell>Invested Round</TableHeadCell>
                <TableHeadCell>Invested Amount</TableHeadCell>
                <TableHeadCell>Ownership</TableHeadCell>
                <TableHeadCell>Implied Value</TableHeadCell>
                <TableHeadCell>Multiple</TableHeadCell>
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
                                    <Badge color="blue">
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
                                    <Badge color="green">
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
