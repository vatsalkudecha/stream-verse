import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="absolute h-screen inset-0 z-[-10]">
        <img
        className="fixed h-full w-full object-cover opacity-85"
        src={BACKGROUND_IMG}
        alt="background"
      />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
