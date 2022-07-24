import { useEffect } from "react";
import styled from "styled-components";

import {
    AppContentHeader,
    Card,
    Table,
    TableHead,
    TableBody,
    TableHeadCell,
    TableRow,
    TableRowHeadCell,
    TableBodyCell,
    ButtonFilter,
    Badge,
    BadgeColorProps
} from "../../../components";
import { useStore } from "../../../context";
import { Actions, fetchIpos } from "../../../store";
import {
    createKeyFromTwoDates,
    getIpoQueryRange,
    formatFunds,
    formatNumber
} from "../../../utils";

const CalendarControl = styled.div`
    font-size: var(--font-size-4);
    font-weight: var(--line-height-4);
    color: var(--generalColor-60);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-4);

    div {
        display: flex;
        align-items: center;
        gap: var(--spacing-4);

        span {
            color: var(--generalColor-70);
            cursor: pointer;

            &:hover {
                color: var(--primaryColor-100);
            }
        }
    }
`;
const CalendarCard = styled(Card)`
    height: calc(100% - 8rem);
`;

type QueryBy = "weekly" | "monthly";
type QueryNext = "prev" | "next";

export const IpoCalendar = () => {
    const {
        state: {
            ipoCalendar: { data, currentMonth, currentWeek, queryBy }
        },
        dispatch
    } = useStore();

    useEffect(() => {
        fetchIpos(currentWeek.from, currentWeek.to, "weekly", data, dispatch);
        fetchIpos(
            currentMonth.from,
            currentMonth.to,
            "monthly",
            data,
            dispatch
        );
    }, [dispatch]);

    const setNewQueryBy = async (value: string) => {
        dispatch({
            type: Actions.SET_QUERY_BY,
            payload: { queryBy: value as QueryBy }
        });
    };
    const renderQueryPeriodText = (queryBy: QueryBy) => {
        if (queryBy === "weekly") {
            return `${currentWeek.from} - ${currentWeek.to}`;
        }
        return `${currentMonth.from} - ${currentMonth.to}`;
    };

    const getCurrentPeriodKey = (queryBy: QueryBy) => {
        if (queryBy === "weekly") {
            return createKeyFromTwoDates(currentWeek.from, currentWeek.to);
        }
        return createKeyFromTwoDates(currentMonth.from, currentMonth.to);
    };

    const currentPeriodKey = getCurrentPeriodKey(queryBy);

    const getIpos = (queryNext: QueryNext) => {
        const { from, to } = getIpoQueryRange(
            queryNext,
            queryBy,
            currentMonth,
            currentWeek
        );
        fetchIpos(from, to, queryBy, data, dispatch);
    };

    const IPO_STATUS_BADGE_MAP = {
        withdrawn: "red",
        priced: "blue",
        filed: "yellow",
        expected: "green"
    };

    return (
        <>
            <AppContentHeader title="IPO Calendar">
                <CalendarControl>
                    <ButtonFilter
                        onClick={setNewQueryBy}
                        activeIndex={queryBy}
                        data={[
                            { label: "Weekly", value: "weekly" },
                            { label: "Monthly", value: "monthly" }
                        ]}
                    />
                    {renderQueryPeriodText(queryBy)}
                    <span>|</span>
                    <div>
                        <span onClick={() => getIpos("prev")}>Prev</span>
                        <span onClick={() => getIpos("next")}>Next</span>
                    </div>
                </CalendarControl>
            </AppContentHeader>
            <CalendarCard>
                <Table>
                    <TableHead>
                        <TableHeadCell>Date</TableHeadCell>
                        <TableHeadCell>Company Name</TableHeadCell>
                        <TableHeadCell align="center">Symbol</TableHeadCell>
                        <TableHeadCell>Exchange</TableHeadCell>
                        <TableHeadCell>Number of Shares</TableHeadCell>
                        <TableHeadCell>Price</TableHeadCell>
                        <TableHeadCell>Total Shares Value</TableHeadCell>
                        <TableHeadCell>Status</TableHeadCell>
                    </TableHead>
                    <TableBody>
                        {data?.[queryBy][currentPeriodKey]?.map(
                            (company, idx) => {
                                return (
                                    <TableRow key={idx}>
                                        <TableRowHeadCell>
                                            {company.date}
                                        </TableRowHeadCell>
                                        <TableBodyCell>
                                            {company.name}
                                        </TableBodyCell>
                                        <TableBodyCell align="center">
                                            <Badge>
                                                {company.symbol || "N/A"}
                                            </Badge>
                                        </TableBodyCell>
                                        <TableBodyCell>
                                            {company.exchange}
                                        </TableBodyCell>
                                        <TableBodyCell>
                                            {formatNumber(
                                                company.numberOfShares
                                            )}
                                        </TableBodyCell>
                                        <TableBodyCell>
                                            {company.price && (
                                                <Badge color="blue">
                                                    $ {company.price}
                                                </Badge>
                                            )}
                                        </TableBodyCell>
                                        <TableBodyCell>
                                            {formatFunds(
                                                company.totalSharesValue
                                            )}
                                        </TableBodyCell>
                                        <TableBodyCell>
                                            <Badge
                                                color={
                                                    IPO_STATUS_BADGE_MAP[
                                                        company.status
                                                    ] as BadgeColorProps
                                                }
                                            >
                                                {company.status}
                                            </Badge>
                                        </TableBodyCell>
                                    </TableRow>
                                );
                            }
                        )}
                    </TableBody>
                </Table>
            </CalendarCard>
        </>
    );
};
