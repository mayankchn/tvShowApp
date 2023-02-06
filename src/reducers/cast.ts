import { Cast } from "../models"
import { AnyAction } from "redux"
import { CAST_LOADED } from "../actions/cast"
import produce from "immer"
import { SHOW_ID_CHANGED } from "../actions/showId"
import { Action } from "../actions" 

type State = {
    id:number,
    cast: Cast[]
}
const initialState: State = {
    id:undefined!,
    cast: [],
}

export const castReducer = (currentState = initialState, action: Action) => {
    switch (action.type) {
        case SHOW_ID_CHANGED : 
            return produce(currentState,(draft)=>{
                draft.id=action.payload as number
            })
        case CAST_LOADED:
            return produce(currentState, (draft) => {
                draft.cast = action.payload;
            })
        default:
            return currentState;
    }
}