import { combineReducers } from "redux";
import {createStore} from "redux"
import { castReducer } from "./reducers/cast";
import { showDetailReducer } from "./reducers/showDetail";
import { showReducer } from "./reducers/shows";

export const reducer = combineReducers({
    shows:showReducer,
    showDetail:showDetailReducer,
    cast: castReducer,
})

export type State = ReturnType<typeof reducer>

export const store = createStore(reducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)