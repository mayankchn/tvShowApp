import axios from "axios";
import { Show } from "./models";

export function getShow(keyword:string) {
    return axios.get<{show:Show}[]>("https://api.tvmaze.com/search/shows?q=" + keyword).then((response)=>{
        return response.data.map((item)=>{
            return item.show
        });
    })
}

export function getShowDetail(id:number){
    return axios.get("https://api.tvmaze.com/shows/" + id).then((response)=>{
        return response.data;
    })
}

export function getCast(id:number){
    return axios.get("https://api.tvmaze.com/shows/"+id+"/cast").then((response)=>{
        return response.data.map((item:any)=>{
            return item.character
        }) 
    })
}