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
