import { Cast } from "../models"
import { AnyAction } from "redux"
import { CAST_LOADED } from "../actions/cast"
import produce from "immer"

type State = {
    cast: Cast[]
}
const initialState: State = {
    cast: []
}

export const castReducer = (currentState = initialState, action: AnyAction) => {
    switch (action.type) {
        case CAST_LOADED:
            return produce(currentState, (draft) => {
                draft.cast = action.payload;
            })
        default:
            return currentState;
    }
}