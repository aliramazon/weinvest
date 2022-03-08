import { FundsActions } from './funds';
import { CompaniesActions } from './companies';

export const Actions = { ...FundsActions, ...CompaniesActions };
export type ActionsType = FundsActions | CompaniesActions;

export type FetchFundsPayload = undefined;
export type Payload = FetchFundsPayload;

export interface ActionType {
    type: ActionsType;
    payload?: Payload;
}
