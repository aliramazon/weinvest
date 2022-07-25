import { TableBody, TableRow, TableBodyCell, TableRowHeadCell } from "../Table";
import { Card } from "../Card";

export interface KeyValueInterface {
    key: string;
    value: number | string;
}

interface KeyValueListProps {
    data: KeyValueInterface[];
}

export const KeyValueList: React.FC<KeyValueListProps> = ({ data }) => {
    return (
        <Card>
            <TableBody>
                {data &&
                    data.map((item: KeyValueInterface) => {
                        return (
                            <TableRow key={`${item.key}${item.value}`}>
                                <TableRowHeadCell>{item.key}</TableRowHeadCell>
                                <TableBodyCell align="right">
                                    {item.value}
                                </TableBodyCell>
                            </TableRow>
                        );
                    })}
            </TableBody>
        </Card>
    );
};
