import { Funds, Companies, CompanyIpo } from "../../types";
import moment from "moment";

export interface FundsState {
    data: Funds;
}

export interface CompaniesState {
    data: Companies;
}
export interface IposByPeriod {
    weekly: {
        [week: string]: CompanyIpo[];
    };
    monthly: {
        [month: string]: CompanyIpo[];
    };
}

export interface IpoCalendarRange {
    from: string;
    to: string;
}

export type IpoQueryBy = "weekly" | "monthly";
export interface IpoCalendarState {
    data: IposByPeriod;
    currentWeek: IpoCalendarRange;
    currentMonth: IpoCalendarRange;
    queryBy: IpoQueryBy;
    isLoading: boolean;
}

export interface GlobalState {
    funds: FundsState;
    companies: CompaniesState;
    ipoCalendar: IpoCalendarState;
}

export const initialState = {
    funds: {},
    companies: {},
    ipoCalendar: {
        data: { weekly: {}, monthly: {} },
        currentWeek: {
            from: moment()
                .year(2024)
                .week(2)
                .startOf("isoWeek")
                .format("YYYY-MM-DD"),
            to: moment()
                .year(2024)
                .week(2)
                .endOf("isoWeek")
                .format("YYYY-MM-DD"),
        },
        currentMonth: {
            from: moment()
                .year(2024)
                .month(0)
                .startOf("month")
                .format("YYYY-MM-DD"),
            to: moment()
                .year(2024)
                .month(0)
                .endOf("month")
                .format("YYYY-MM-DD"),
        },
        queryBy: "weekly",
        isLoading: true,
    },
} as GlobalState;
