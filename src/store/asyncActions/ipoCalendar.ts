import { FinnhubAPI } from "../../api";
import { Actions, ActionType } from "../actions";
import { IposByPeriod } from "../state";
import { createKeyFromTwoDates } from "../../utils";
const finnhub = new FinnhubAPI();

export const fetchIpos = async (
    from: string,
    to: string,
    queryBy: "weekly" | "monthly",
    data: IposByPeriod,
    dispatch: (action: ActionType) => void
) => {
    const periodKey = createKeyFromTwoDates(from, to);
    let ipos = [];
    if (!data[queryBy][periodKey]) {
        const { ipoCalendar } = await finnhub.fetchIPOCalendar(from, to);
        ipos = ipoCalendar;
    }

    dispatch({
        type: Actions.FETCH_IPOS,
        payload: {
            from,
            to,
            data: ipos,
            queryBy
        }
    });
};
