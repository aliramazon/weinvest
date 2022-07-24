import { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import {
    AppContentHeader,
    Card,
    Table,
    TableHead,
    TableBody,
    TableHeadCell,
    TableRow,
    TableBodyCell,
    ButtonFilter
} from "../../../components";
import { useStore } from "../../../context";
import { Actions, fetchIpos } from "../../../store";
import { createKeyFromTwoDates } from "../../../utils";

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
        }
    }
`;
const CalendarCard = styled(Card)`
    height: calc(100% - 8rem);
`;

type QueryBy = "weekly" | "monthly";
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

    const getIpos = (value: "prev" | "next") => {
        let from = moment(currentWeek.from).add(1, "week").format("YYYY-MM-DD");
        let to = moment(currentWeek.to).add(1, "week").format("YYYY-MM-DD");

        if (value === "prev") {
            if (queryBy === "weekly") {
                from = moment(currentWeek.from)
                    .subtract(1, "week")
                    .format("YYYY-MM-DD");
                to = moment(currentWeek.to)
                    .subtract(1, "week")
                    .format("YYYY-MM-DD");
            } else {
                from = moment(currentMonth.from)
                    .subtract(1, "month")
                    .format("YYYY-MM-DD");
                to = moment(from).endOf("month").format("YYYY-MM-DD");
            }
        } else {
            if (queryBy === "monthly") {
                from = moment(currentMonth.from)
                    .add(1, "month")
                    .format("YYYY-MM-DD");
                to = moment(from).endOf("month").format("YYYY-MM-DD");
            }
        }
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
                    <TableBody>
                        {data?.[queryBy][currentPeriodKey]?.map(
                            (company, idx) => {
                                return (
                                    <TableRow key={idx}>
                                        <TableBodyCell>
                                            {company.date}
                                        </TableBodyCell>
                                        <TableBodyCell>
                                            {company.name}
                                        </TableBodyCell>
                                        <TableBodyCell align="center">
                                            {company.symbol}
                                        </TableBodyCell>
                                        <TableBodyCell>
                                            {company.exchange}
                                        </TableBodyCell>
                                        <TableBodyCell>
                                            {company.numberOfShares}
                                        </TableBodyCell>
                                        <TableBodyCell>
                                            {company.price}
                                        </TableBodyCell>
                                        <TableBodyCell>
                                            {company.totalSharesValue}
                                        </TableBodyCell>
                                        <TableBodyCell>
                                            {company.status}
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
