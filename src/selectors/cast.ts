import { createSelector } from "reselect"
import { State } from "../store"

export const castStateSelector = (state:State) => {
    return state.cast
}

export const castSelector = createSelector(castStateSelector,(castState)=>{
    return castState.cast
})