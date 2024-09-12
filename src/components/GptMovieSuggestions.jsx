import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="p-4 bg-black opacity-90 text-white shadow-xl rounded-lg -mt-52 mx-auto max-w-7xl">
      <div className="space-y-8">
        {movieNames.map((movieName, index) => (
          <div key={movieName} className="space-y-4">
            <MovieList title={movieName} movies={movieResults[index]} />
            {/* {console.log(movieName)} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
