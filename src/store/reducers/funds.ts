import { FundsState } from '../state/state';
import { Funds } from '../../mocks';
import { ActionType, Actions } from '../actions';
import API from '../../api/';
const api = new API();

export const funds = (state: FundsState, action: ActionType<Funds>) => {
    switch (action.type) {
        case Actions.FETCH_FUNDS_DATA:
            state.data = api.fetchFundsData();
            console.log(state);
            return state;
        default:
            return state;
    }
};
