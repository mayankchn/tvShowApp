import { createSelector } from "reselect";
import { State } from "../store";

export const showDetailState = (state:State) => {
    return state.showDetail
}

export const showState = createSelector(showDetailState,(showDetailState)=>{
    return showDetailState.show
})