import { combineReducers } from "redux";
import {createStore} from "redux"
import { showReducer } from "./reducers/shows";

export const reducer = combineReducers({
    shows:showReducer,
})

export type State = ReturnType<typeof reducer>

export const store = createStore(reducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)