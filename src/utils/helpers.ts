const d3 = require('d3-format');
const format = d3.format('$,');
export const roundNumber = (number: number) => {
    let stringNumber = number.toString();
    let splitNumber = stringNumber.split('.');
    let fraction = splitNumber[1];
    let decimal = splitNumber[0];
    if (fraction && fraction.length > 2) {
        fraction = fraction.slice(0, 2);
        return parseInt([decimal, fraction].join('.'));
    }
    return number;
};

export const formatFunds = (value: number) => {
    return format(value);
};

export const formatPercentage = (value: number) => {
    return `${roundNumber(value)}%`;
};
