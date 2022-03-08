import { FundsActions } from './funds';
import { CompaniesActions } from './companies';

export const Actions = { ...FundsActions, ...CompaniesActions };
export type ActionsType = FundsActions | CompaniesActions;

export interface ActionType<T> {
    type: ActionsType;
    payload: T;
}
