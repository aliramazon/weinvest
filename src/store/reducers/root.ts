import produce from "immer";
import { combineReducers } from "redux-immer";
import { companies } from "./companies";
import { funds } from "./funds";
import { ipoCalendar } from "./ipoCalendar";
export const rootReducer = combineReducers(produce, {
    funds,
    companies,
    ipoCalendar
});
