import {call, put} from "redux-saga/effects"
import { Action } from "../actions"
import { castLoadedAction } from "../actions/cast"
import { getCast } from "../api"

export function* fetchCast(action:Action):Generator<any,any,any>{
    console.log('cast saga ',action.payload)
    const cast = yield call(getCast,action.payload)
    yield put(castLoadedAction(cast))
}