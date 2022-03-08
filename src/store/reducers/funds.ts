import { FundsState } from '../state/state';
import { Funds } from '../../mocks';
import { ActionType, Actions } from '../actions';
import API from '../../api/';
const api = new API();

export const funds = (
    state = {} as FundsState,
    action: ActionType
): FundsState => {
    switch (action.type) {
        case Actions.FETCH_FUNDS_DATA:
            state.data = api.fetchFundsData();
            return state;
        default:
            return state;
    }
};
