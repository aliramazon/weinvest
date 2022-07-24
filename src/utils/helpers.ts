import { IpoQueryBy, IpoCalendarRange } from "../store";
const d3 = require("d3-format");
const format = d3.format("$,");
const moment = require("moment");

export const roundNumber = (number: number) => {
    return number.toFixed(2);
};

export const formatFunds = (value: number) => {
    return format(value);
};

export const formatPercentage = (value: number) => {
    return `${roundNumber(value)}%`;
};

export const uppercaseString = (str: string) => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

export const createKeyFromTwoDates = (date1: string, date2: string) => {
    return `${date1}${date2}`;
};

export const formatDate = (date: moment.Moment) => {
    return moment(date).format("YYYY-MM-DD");
};

export const formatNumber = (number: Number) => {
    return d3.format(",.2r")(number);
};
export const getIpoQueryRange = (
    queryNext: "prev" | "next",
    queryBy: IpoQueryBy,
    currentMonth: IpoCalendarRange,
    currentWeek: IpoCalendarRange
) => {
    let from = moment(currentWeek.from).add(1, "week").format("YYYY-MM-DD");
    let to = moment(currentWeek.to).add(1, "week").format("YYYY-MM-DD");

    if (queryNext === "prev") {
        if (queryBy === "weekly") {
            from = formatDate(moment(currentWeek.from).subtract(1, "week"));

            to = formatDate(moment(currentWeek.to).subtract(1, "week"));
        } else {
            from = formatDate(moment(currentMonth.from).subtract(1, "month"));

            to = formatDate(moment(from).endOf("month"));
        }
    } else {
        if (queryBy === "monthly") {
            from = formatDate(moment(currentMonth.from).add(1, "month"));
            to = formatDate(moment(from).endOf("month"));
        }
    }

    return { from, to };
};
