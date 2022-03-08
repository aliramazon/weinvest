import { CompaniesState } from '../state/state';
import { ActionType, Actions } from '../actions';
import { Companies } from '../../mocks';
import API from '../../api';
const api = new API();

export const companies = (
    state: CompaniesState,
    action: ActionType<Companies>
) => {
    switch (action.type) {
        case Actions.FETCH_FUNDS_DATA:
            state.funds = api.fetchCompaniesData();
            return state;
        default:
            return state;
    }
};
