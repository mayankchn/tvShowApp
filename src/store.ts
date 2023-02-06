import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers } from "redux";
import { createStore } from "redux"
import { castReducer } from "./reducers/cast";
import { showDetailReducer } from "./reducers/showDetail";
import { showReducer } from "./reducers/shows";
import { takeLatest } from "redux-saga/effects"
import { SHOWS_QUERY_CHANGE } from "./actions/shows";
import { fetchShows } from "./sagas/shows";
import { SHOW_ID_CHANGED } from "./actions/showId";
import { fetchShowDetail } from "./sagas/showDetail";
import { fetchCast } from "./sagas/cast";

export const reducer = combineReducers({
    shows: showReducer,
    showDetail: showDetailReducer,
    cast: castReducer,
})

export type State = ReturnType<typeof reducer>

function* rootSaga() {
    yield takeLatest(SHOWS_QUERY_CHANGE, fetchShows)
    yield takeLatest(SHOW_ID_CHANGED,fetchShowDetail)
    yield takeLatest(SHOW_ID_CHANGED,fetchCast)
}

const sagaMiddleWare = createSagaMiddleware()

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)))

sagaMiddleWare.run(rootSaga)
export default store