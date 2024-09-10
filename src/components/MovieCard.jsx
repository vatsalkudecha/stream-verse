import React from "react";
import { MOVIE_IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-3">
      {posterPath ? (
        <img src={MOVIE_IMG_CDN_URL + posterPath} alt="movie-card" />
      ) : (
        <p>No image available</p> // Fallback for missing image
      )}
    </div>
  );
};

export default MovieCard;
