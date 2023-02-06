import { createSelector } from "reselect";
import { State } from "../store";

// base showsState selector
export const showsStateSelector = (state:State) => {
    return state.shows;
}

export const showsQuerySelector = createSelector(showsStateSelector,(showsState)=>{
    return showsState.query;
})

export const showsMapSelector = createSelector(showsStateSelector,(showsState)=>{
    return showsState.shows;
})

export const showsSelector = createSelector(showsMapSelector,(showsMap)=>{
    return Object.keys(showsMap).map((id)=>{
        return showsMap[+id]
    })
})