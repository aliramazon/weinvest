import { FundsActions } from "./funds";
import { CompaniesActions } from "./companies";
import { IpoCalendarActions } from "./ipoCalendar";
import { CompanyIpo } from "../../types";

export const Actions = {
    ...FundsActions,
    ...CompaniesActions,
    ...IpoCalendarActions
};
export type ActionsType = FundsActions | CompaniesActions | IpoCalendarActions;

interface FetchFundsDataAction {
    type: FundsActions.FETCH_FUNDS_DATA;
}

interface FetchCompaniesData {
    type: CompaniesActions.FETCH_COMPANIES_DATA;
}
interface SortFundsInvestedIn {
    type: FundsActions.SORT_FUNDS_INVESTEDIN;
    payload: {
        fundId: string;
        columnIdx: string;
        sortDirection: "ASC" | "DESC";
    };
}

interface FetchIpoCalendar {
    type: IpoCalendarActions.FETCH_IPOS;
    payload: {
        from: string;
        to: string;
        data: CompanyIpo[];
        queryBy: "weekly" | "monthly";
    };
}

interface SetIpoQueryBy {
    type: IpoCalendarActions.SET_QUERY_BY;
    payload: {
        queryBy: "weekly" | "monthly";
    };
}

export type ActionType =
    | FetchFundsDataAction
    | SortFundsInvestedIn
    | FetchCompaniesData
    | FetchIpoCalendar
    | SetIpoQueryBy;
