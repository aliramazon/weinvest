import { Funds, Companies } from '../../mocks';

export interface FundsState {
    data: Funds;
}

export interface CompaniesState {
    data: Companies;
}

export interface GlobalState {
    funds: FundsState;
    companies: CompaniesState;
}
