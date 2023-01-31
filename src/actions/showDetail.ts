import { ActionCreator } from ".";
import { Show } from "../models";

export const SHOW_ID_CHANGED = "SHOW_ID_CHANGED";

export const showIdChangedAction:ActionCreator<{show:Show}> = (show:Show) =>{
    return {
        type:SHOW_ID_CHANGED,
        payload:show,
    }
}