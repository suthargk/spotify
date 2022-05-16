import React, {memo} from "react";
import SearchIcon from "../../icon/SearchIcon";
import CloseIcon from "../../icon/CloseIcon";

const SearchSong = memo(({
  onSearchSongSubmit = (f) => f,
  id = "search",
  type = "text",
  searchTerm,
  onHandleChange,
  setSearchTerm,
}) => {
  console.log("JJ")
  return (
    <div className="w-full p-4 pt-0 my-4">
      <label htmlFor={id}></label>
      <div className="relative flex justify-between bg-gray-800 items-center rounded-md p-1 w-full border border-gray-800 focus-within:outline focus-within:outline-2 focus-within:outline-blue-500">
        <input
          className="w-full bg-transparent border-none focus:outline-none text-gray-200 p-1"
          id={id}
          value={searchTerm}
          onChange={onHandleChange}
          type={type}
          placeholder="Search Song, Artist"
        ></input>
        {searchTerm.length ? (
          <span onClick={() => setSearchTerm("")}>
            <CloseIcon className="h-6 w-6 lg:h-7 lg:h-7 text-gray-400" />
          </span>
        ) : (
          <span>
            <SearchIcon className="h-5 w-5 mr-1 text-gray-400" />
          </span>
        )}
      </div>
    </div>
  );
});

export default SearchSong;
