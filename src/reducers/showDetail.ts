import produce from "immer";
import { AnyAction } from "redux";
import { SHOW_ID_CHANGED } from "../actions/showDetail";
import { Show } from "../models";

type State = {
    show: Show;
}
const initialState:State = {
    show: {}
}

export const showDetailReducer = (currenState = initialState, action: AnyAction) => {
    switch (action.type) {
        case SHOW_ID_CHANGED:
            return produce(currenState, (draft) => {
                draft.show = action.payload as Show || {}
            })
        default:
            return currenState;
    }
}