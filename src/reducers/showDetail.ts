import produce from "immer";
import { Action } from "../actions";
import { SHOW_DETAIL_LOADED } from "../actions/showDetail";
import { SHOW_ID_CHANGED } from "../actions/showId";
import { Show } from "../models";

type State = {
    id:number,
    show: Show;
}
const initialState:State = {
    id:-1,
    show: {}
}

export const showDetailReducer = (currenState = initialState, action: Action) => {
    switch (action.type) {
        case SHOW_ID_CHANGED : 
            return produce(currenState,(draft)=>{
                draft.id=action.payload
            })
        case SHOW_DETAIL_LOADED:
            return produce(currenState, (draft) => {
                draft.show = action.payload as Show || {}
            })
        default:
            return currenState;
    }
}