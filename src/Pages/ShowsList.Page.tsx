import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { FC, useState, useEffect } from "react"
import { getShow } from "../api";
import { Show } from "../models";
import { showsLoadedAction, showsQueryChangeAction } from "../actions/shows";
import { connect } from "react-redux/es/exports";
import { showsQuerySelector, showsSelector } from "../selectors/shows";
import { State } from "../store";

type ShowListPageProps = {
  query: string;
  shows: Show[];
  showsQueryChange: (query: string) => void;
  showsLoaded: (shows: Show[]) => void;
}

const ShowListPage: FC<ShowListPageProps> = ({ query, shows, showsQueryChange, showsLoaded }) => {

  function handleSearch(e: any) {
    // console.log('handle search...', e.target.value)
    showsQueryChange(e.target.value)
  }

  useEffect(() => {
    // console.log('i run...')
    const promise = getShow(query).then((response) => {
      // console.log('response from api is ', response)
      showsLoaded(response)
    })
  }, [query])

  return (
    <div className="mt-2">
      <SearchBar
        value={query}
        onChange={handleSearch}
      />
      <div className="flex flex-wrap justify-center">
        {shows.map((show: any) => {
          return (
            <ShowCard key={show.id} show={show} />
          )
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state: State) => {
  return { query: showsQuerySelector(state), shows: showsSelector(state) };
}

const mapDispatchToProps = {
  showsLoaded: showsLoadedAction,
  showsQueryChange: showsQueryChangeAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowListPage);
