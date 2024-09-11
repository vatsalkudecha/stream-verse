import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form
        className="bg-gray-800 py-3 px-8 rounded-lg shadow-lg flex items-center space-x-10 z-20 bg-opacity-50"
        style={{ marginTop: "-10%" }}
      >
        {/* Search Input */}
        <input
          type="text"
          className="p-2 w-96 text-lg rounded-lg bg-gray-500 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        {/* Search Button */}
        <button className="py-3 px-8 bg-red-600 text-white font-bold rounded-lg hover:bg-red-500 transition duration-300 ease-in-out">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
