import { ActionCreator } from ".";
import { Show } from "../models";

export const SHOW_DETAIL_LOADED = "SHOW_DETAIL_LOADED";

export const showDetailLoadedAction:ActionCreator<{show:Show}> = (show:Show) =>{
    return {
        type:SHOW_DETAIL_LOADED,
        payload:show,
    }
}