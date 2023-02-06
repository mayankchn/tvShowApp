import {call,put} from "redux-saga/effects"
import { Action } from "../actions"
import { showDetailLoadedAction } from "../actions/showDetail"
import { getShowDetail } from "../api"

export function* fetchShowDetail(action:Action):Generator<any,any,any>{
    console.log('show detail saga ',action.payload)
    const showDetail = yield call(getShowDetail,action.payload)
    yield put(showDetailLoadedAction(showDetail))
}