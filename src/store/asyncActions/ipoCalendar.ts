import moment from "moment";
import { FinnhubAPI } from "../../api";
import { Actions, ActionType } from "../actions";
import { IposByPeriod } from "../state";
import { createKeyFromTwoDates } from "../../utils";
import { CompanyIpo } from "../../types";

const finnhub = new FinnhubAPI();

const sortByDate = (ipos: CompanyIpo[]) => {
    return ipos.sort((a: CompanyIpo, b: CompanyIpo) => {
        if (moment(a.date) > moment(b.date)) {
            return 1;
        }
        return -1;
    });
};

export const fetchIpos = async (
    from: string,
    to: string,
    queryBy: "weekly" | "monthly",
    data: IposByPeriod,
    dispatch: (action: ActionType) => void
) => {
    const periodKey = createKeyFromTwoDates(from, to);
    let ipos: CompanyIpo[] = [];
    if (!data[queryBy][periodKey]) {
        dispatch({
            type: Actions.SET_IS_LOADING,
            payload: { isLoading: true }
        });
        const { ipoCalendar } = await finnhub.fetchIPOCalendar(from, to);
        ipos = sortByDate([...ipoCalendar]);
    }
    dispatch({
        type: Actions.SET_IS_LOADING,
        payload: { isLoading: false }
    });

    dispatch({
        type: Actions.CACHE_IPOS,
        payload: {
            from,
            to,
            data: ipos,
            queryBy
        }
    });
};
