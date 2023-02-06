import { ActionCreator } from "."
import { Cast } from "../models"

export const CAST_LOADED = "CAST_LOADED"

export const castLoadedAction:ActionCreator<{cast:Cast[]}> = (cast:Cast[]) => {
    return {
        type:CAST_LOADED,
        payload:cast,
    }
}