import { FundsState } from "../state/state";
import { ActionType, Actions } from "../actions";
import API from "../../api/";
import { FundedCompany } from "../../types";
const api = new API();

export const funds = (
    draft = {} as FundsState,
    action: ActionType
): FundsState => {
    switch (action.type) {
        case Actions.FETCH_FUNDS_DATA:
            draft.data = api.fetchFundsData();
            return draft;
        case Actions.SORT_FUNDS_INVESTEDIN:
            const fund = draft.data[action.payload.fundId];
            fund.investedIn.sort((a: FundedCompany, b: FundedCompany) => {
                const columnIdx = action.payload
                    .columnIdx as keyof FundedCompany;
                if (action.payload.sortDirection === "ASC") {
                    return (a[columnIdx] as number) - (b[columnIdx] as number);
                }
                return (b[columnIdx] as number) - (a[columnIdx] as number);
            });
            draft.data[action.payload.fundId] = fund;
            return draft;
        default:
            return draft;
    }
};
