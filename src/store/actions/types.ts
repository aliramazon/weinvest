import { FundsActions } from './funds';
import { CompaniesActions } from './companies';

export const Actions = { ...FundsActions, ...CompaniesActions };
export type ActionsType = FundsActions | CompaniesActions;

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
        sortDirection: 'ASC' | 'DESC';
    };
}

export type ActionType =
    | FetchFundsDataAction
    | SortFundsInvestedIn
    | FetchCompaniesData;
