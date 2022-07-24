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
    Loading,
    Empty,
    BadgeColorProps
} from "../../../components";
import { useStore } from "../../../context";
import { Actions, fetchIpos, IpoQueryBy } from "../../../store";
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

const IPO_STATUS_BADGE_MAP = {
    withdrawn: "red",
    priced: "blue",
    filed: "yellow",
    expected: "green"
};

export const IpoCalendar = () => {
    const {
        state: {
            ipoCalendar: { data, currentMonth, currentWeek, queryBy, isLoading }
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
            payload: { queryBy: value as IpoQueryBy }
        });
    };
    const renderQueryPeriodText = (queryBy: IpoQueryBy) => {
        if (queryBy === "weekly") {
            return `${currentWeek.from} - ${currentWeek.to}`;
        }
        return `${currentMonth.from} - ${currentMonth.to}`;
    };

    const getCurrentPeriodKey = (queryBy: IpoQueryBy) => {
        if (queryBy === "weekly") {
            return createKeyFromTwoDates(currentWeek.from, currentWeek.to);
        }
        return createKeyFromTwoDates(currentMonth.from, currentMonth.to);
    };

    const currentPeriodKey = getCurrentPeriodKey(queryBy);

    const getIpos = (queryNext: "prev" | "next") => {
        const { from, to } = getIpoQueryRange(
            queryNext,
            queryBy,
            currentMonth,
            currentWeek
        );
        fetchIpos(from, to, queryBy, data, dispatch);
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
                    {isLoading && <Loading />}

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
                                            {company.symbol && (
                                                <Badge>{company.symbol}</Badge>
                                            )}
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
                                            {company.symbol && (
                                                <Badge>{company.symbol}</Badge>
                                            )}
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

                    {!isLoading &&
                        !data?.[queryBy][currentPeriodKey]?.length && (
                            <Empty text="There are not IPO scheduled for this period" />
                        )}
                </Table>
            </CalendarCard>
        </>
    );
};
