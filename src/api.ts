import axios from "axios";
import { Show } from "./models";

export function getShow(keyword:string) {
    // console.log('keyword ',keyword)
    return axios.get<{show:Show}[]>("https://api.tvmaze.com/search/shows?q=" + keyword).then((response)=>{
        return response.data.map((item)=>{
            // console.log('show is ',item.show)
            return item.show
        });
    })
}