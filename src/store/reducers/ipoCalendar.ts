import { IpoCalendarState } from "../state";
import { ActionType, Actions } from "../actions";
import { createKeyFromTwoDates } from "../../utils";

export const ipoCalendar = (
    state = {} as IpoCalendarState,
    action: ActionType
): IpoCalendarState => {
    switch (action.type) {
        case Actions.FETCH_IPOS:
            const periodKey = createKeyFromTwoDates(
                action.payload.from,
                action.payload.to
            );
            if (!state.data[action.payload.queryBy][periodKey]) {
                state.data[action.payload.queryBy][periodKey] =
                    action.payload.data;
            }
            let period: keyof IpoCalendarState = "currentWeek";
            if (action.payload.queryBy === "monthly") {
                period = "currentMonth";
            }
            state[period] = {
                from: action.payload.from,
                to: action.payload.to
            };

            return state;
        case Actions.SET_QUERY_BY:
            state.queryBy = action.payload.queryBy;
            return state;

        default:
            return state;
    }
};
