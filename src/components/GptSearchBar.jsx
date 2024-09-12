import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  const dispatch = useDispatch();

  // Movie Search based on gptResults from TMDB API
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    // return json.results;
    
    // Filter results for an exact match by movie title
    const exactMatches = json.results.filter(
      (result) => result.title.toLowerCase() === movie.trim().toLowerCase()
    );

    return exactMatches;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    // Make an API call to GPT api and get Movie Results
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Krrish, Rockstar, John Wick, Avengers, Don";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // TODO: Write Error Handling here
    }

    // console.log(gptResults.choices?.[0]?.message?.content);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // For each movie, Search TMDB API
    
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form
        className="bg-gray-800 py-3 px-8 rounded-lg shadow-lg flex items-center space-x-10 z-20 bg-opacity-50"
        style={{ marginTop: "-10%" }}
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Search Input */}
        <input
          type="text"
          className="p-2 w-96 text-lg rounded-lg bg-gray-500 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          ref={searchText}
        />
        {/* Search Button */}
        <button
          className="py-3 px-8 bg-red-600 text-white font-bold rounded-lg hover:bg-red-500 transition duration-300 ease-in-out"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
