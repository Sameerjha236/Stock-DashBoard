import React, { useState } from "react";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import SearchResults from "./SearchResults";
import { useGlobalContext } from "../context/Context";
import { searchSymbols } from "../utils/api/stock-api";
const Search = () => {
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState([]);
  const { darkMode } = useGlobalContext();
  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  const updateBestMatches = async () => {
    try {
      if (input) {
        const data = await searchSymbols(input);
        const result = data.result;
        setBestMatches(result);
      }
    } catch (error) {
      setBestMatches([]);
      console.log("error=> ", error);
    }
  };

  return (
    <div
      className={` flex items-center my-4 border-2 rounded-md relative z-50 w-96 ${
        darkMode
          ? "bg-gray-900 border-gray-800"
          : " bg-white border-neutral-200"
      }}`}
    >
      <input
        type="text"
        value={input}
        placeholder="Search Stock"
        className={` w-full px-4 py-2 focus:outline-none rounded-md ${
          darkMode ? "bg-gray-900" : null
        }`}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            updateBestMatches();
          }
        }}
      ></input>

      {input && (
        <button onClick={clear}>
          <XIcon className="h-4 w-4 fill-gray-500 m-1" />
        </button>
      )}

      <button
        onClick={updateBestMatches}
        className="h-8 w-8  flex justify-center items-center bg-sky-600 rounded-md"
      >
        <SearchIcon className="h-4 w-4 fill-gray-100 " />
      </button>

      {input && bestMatches.length > 0 ? (
        <SearchResults results={bestMatches} />
      ) : null}
    </div>
  );
};

export default Search;
