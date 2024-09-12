import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="">
      <h1 className="text-3xl font-semibold p-3 text-white">{title}</h1>
      <div
        className="flex overflow-x-auto space-x-4 p-3 scroll-smooth snap-x"
        style={{
          scrollbarWidth: "thin" /* For Firefox */,
          scrollbarColor:
            "rgba(128, 128, 128, 0.6) transparent" /* For Firefox */,
          WebkitScrollbar: { height: "8px" } /* For WebKit browsers */,
          WebkitScrollbarThumb: {
            backgroundColor: "rgba(128, 128, 128, 0.6)",
            borderRadius: "10px",
            transition: "background-color 0.3s ease",
          },
          WebkitScrollbarThumbHover: {
            backgroundColor: "rgba(128, 128, 128, 0.8)" /* Darker on hover */,
          },
          WebkitScrollbarTrack: {
            background: "transparent" /* Transparent track */,
          },
          overflowY: "hidden"
        }}
      >
        {movies.map((movie) => (
          <div key={movie.id} className="snap-center">
            <MovieCard posterPath={movie.poster_path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
