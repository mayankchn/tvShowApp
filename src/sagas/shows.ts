import { Action } from "../actions";
import {call,put} from "redux-saga/effects"
import { getShow } from "../api";
import { showsLoadedAction } from "../actions/shows";

export function* fetchShows(action:Action):Generator<any,any,any>{
    console.log('in shows saga ',action.payload)
    const shows = yield call(getShow,action.payload)
    yield put(showsLoadedAction(shows))
}