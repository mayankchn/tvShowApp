import { ActionCreator } from "."

export const SHOW_ID_CHANGED = "SHOW_ID_CHANGED"

export const showIdChangedAction:ActionCreator<{id:number}> = (id:number) => {
    return {
        type:SHOW_ID_CHANGED,
        payload:id,
    }
}