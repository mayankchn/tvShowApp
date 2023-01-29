import { BsSearch } from "react-icons/bs";
import {FC} from "react"

type SearchBarProps = {}

const SearchBar:FC<SearchBarProps> = () => {
  return (
    <div className="relative">
      <input className="px-2 py-1 w-full rounded-full border border-black" type="text" placeholder="Search" />
      <BsSearch className="absolute right-4 top-1/2 -translate-y-1/2" />
    </div>
  );
}

export default SearchBar;
