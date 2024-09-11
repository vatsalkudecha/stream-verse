import React from "react";
import { MOVIE_IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 px-1 h-72 flex-shrink-0 transform hover:scale-110 transition-transform duration-250">
      {posterPath ? (
        <img
          src={MOVIE_IMG_CDN_URL + posterPath}
          alt="movie-card"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      ) : (
        <p>No image available</p> // Fallback for missing image
      )}
    </div>
  );
};

export default MovieCard;
