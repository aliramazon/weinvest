import { useParams } from 'react-router-dom';
import {
    Table,
    TableHead,
    TableBody,
    TableBodyCell,
    TableHeadCell,
    TableRow
} from '../../../components';
import { useStore } from '../../../context/AppContext';
import { roundNumber, formatPercentage, formatFunds } from '../../../utils';

export const Fund = () => {
    const {
        state: {
            funds: { data },
            companies
        }
    } = useStore();

    const { fundId } = useParams();
    console.log(companies);

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
                    data[fundId].investedIn.map((company) => {
                        return (
                            <TableRow key={company.id}>
                                <TableBodyCell>{company.name}</TableBodyCell>
                                <TableBodyCell>
                                    {company.investedRound}
                                </TableBodyCell>
                                <TableBodyCell>
                                    {formatFunds(company.investedAmount)}
                                </TableBodyCell>
                                <TableBodyCell>
                                    {formatPercentage(
                                        company.ownershipPercentage
                                    )}
                                </TableBodyCell>
                                <TableBodyCell>
                                    {formatFunds(company.impliedValue)}
                                </TableBodyCell>
                                <TableBodyCell>
                                    {roundNumber(company.multiple)}
                                </TableBodyCell>
                            </TableRow>
                        );
                    })}
            </TableBody>
        </Table>
    );
};
