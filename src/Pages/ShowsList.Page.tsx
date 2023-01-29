import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import {FC} from "react"

type ShowListPageProps = {}

const ShowListPage:FC<ShowListPageProps> = () => {
  return (
    <div className="mt-2">
      <SearchBar />
      <div className="flex flex-wrap justify-center">
        <ShowCard />
        <ShowCard />
        <ShowCard />
        <ShowCard />
        <ShowCard />
        <ShowCard />
      </div>
    </div>
  );
}

export default ShowListPage;
