import { Show } from "../models"
import { AnyAction } from "redux"
import { SHOWS_LOADED, SHOWS_QUERY_CHANGE } from "../actions/shows";
import produce from "immer";
import { schema, normalize } from "normalizr";

type State = {
    shows: { [id: number]: Show };
    query: string;
}

const initialState: State = {
    shows: {},
    query: "",
}

export const showReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SHOWS_LOADED:
            return produce(state, (draft) => {
                const shows = action.payload as Show[];

                const showSchema = new schema.Entity('show')
                const normalizedShows = normalize(shows, [showSchema])

                draft.shows = normalizedShows.entities.show || {};
            })
        case SHOWS_QUERY_CHANGE:
            return produce(state, (draft) => {
                draft.query = action.payload;
            })
        default:
            return state;
    }
}