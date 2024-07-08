import React from "react";
import { ImSearch } from "react-icons/im";
const search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="flex justify-around items-center">
      <input
        type="text"
        placeholder="Enter the city"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="outline-none w-1/2 h-10 bg-gradient-to-r from-rose-200 to-teal-200 rounded-lg text-slate-900 text-lg  shadow-lg p-2 bg-transparent"
      />
      <button
        className=" bg-gradient-to-r from-rose-200 to-teal-200 p-4 rounded-full hover:scale-105 delay-300 transition text-slate-700 shadow-lg"
        onClick={handleSearch}
      >
        <ImSearch size={24}/>
      </button>
    </div>
  );
};

export default search;
