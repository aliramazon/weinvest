import { CompaniesState } from '../state/state';
import { ActionType, Actions } from '../actions';
import { Companies } from '../../mocks';
import API from '../../api';
const api = new API();

export const companies = (
    state = {} as CompaniesState,
    action: ActionType
): CompaniesState => {
    switch (action.type) {
        case Actions.FETCH_FUNDS_DATA:
            state.data = api.fetchCompaniesData();
            return state;
        default:
            return state;
    }
};
