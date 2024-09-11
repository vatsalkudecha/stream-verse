import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-64 p-8 relative z-20">
        {movies?.nowPlayingMovies &&
          movies?.popularMovies &&
          movies?.topRatedMovies &&
          movies?.upcomingMovies && (
            <div>
              <MovieList
                title={"Now Playing"}
                movies={movies.nowPlayingMovies}
              />
              <MovieList
                title={"Popular Movies"}
                movies={movies.popularMovies}
              />
              <MovieList
                title={"Top Rated Movies"}
                movies={movies.topRatedMovies}
              />
              <MovieList
                title={"Upcoming Movies"}
                movies={movies.upcomingMovies}
              />
            </div>
          )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
