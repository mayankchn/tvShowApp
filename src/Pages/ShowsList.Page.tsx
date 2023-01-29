import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import {FC, useState, useEffect} from "react"
import { getShow } from "../api";
import { Show } from "../models";

type ShowListPageProps = {}

const ShowListPage:FC<ShowListPageProps> = () => {
  const [shows,setShows] = useState<Show[]>([])
  const [query,setQuery] = useState("")

  function handleSearch(e:any) {
    console.log('handle search...',e.target.value)
    setQuery(e.target.value)
  }

  useEffect(()=>{
    const promise = getShow(query).then((response)=>{
      console.log('response from api is ',response)
      setShows(response)
    })
  },[query])

  return (
    <div className="mt-2">
      <SearchBar 
      value={query}
      onChange={handleSearch}
       />
      <div className="flex flex-wrap justify-center">
        {shows.map((show:any)=>{
          return (
            <ShowCard key={show.id} show={show} />
          )
        })}
      </div>
    </div>
  );
}

export default ShowListPage;
