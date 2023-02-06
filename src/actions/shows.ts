import { ActionCreator } from "."
import { Show } from "../models"

export const SHOWS_LOADED = "SHOWS_LOADED";
export const SHOWS_QUERY_CHANGE = "SHOWS_QUERY_CHANGE";

export const showsLoadedAction:ActionCreator<Show[]> = (shows:Show[]) => {
    return {
        type:SHOWS_LOADED,
        payload:shows,
    }
}

export const showsQueryChangeAction:ActionCreator<string> = (query:string) => {
    return {
        type:SHOWS_QUERY_CHANGE,
        payload:query,
    }
}