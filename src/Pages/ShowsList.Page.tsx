import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { FC} from "react"
import { Show } from "../models";
import { showsQueryChangeAction } from "../actions/shows";
import { connect } from "react-redux/es/exports";
import { showsQuerySelector, showsSelector } from "../selectors/shows";
import { State } from "../store";

type ShowListPageProps = {
  query: string;
  shows: Show[];
  showsQueryChange: (query: string) => void;
}

const ShowListPage: FC<ShowListPageProps> = ({ query, shows, showsQueryChange }) => {

  function handleSearch(e: any) {
    showsQueryChange(e.target.value)
  }

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
  showsQueryChange: showsQueryChangeAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowListPage);
