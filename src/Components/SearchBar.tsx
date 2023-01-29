import { BsSearch } from "react-icons/bs";
import {FC, InputHTMLAttributes} from "react"

type SearchBarProps = InputHTMLAttributes<HTMLInputElement>

const SearchBar:FC<SearchBarProps> = (props) => {
  return (
    <div className="relative">
      <input className="px-2 py-1 w-full rounded-full border border-black indent-2" type="text" placeholder="Search" {...props} />
      <BsSearch className="absolute right-4 top-1/2 -translate-y-1/2" />
    </div>
  );
}

export default SearchBar;
