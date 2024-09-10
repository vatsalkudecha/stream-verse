import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId, title, overview }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  // Fetch trailer video and update the store with trailer video data
  useMovieTrailer(movieId);

  return (
    <div className="relative w-screen aspect-video h-screen overflow-hidden">
      {/* Background video */}
      <iframe
        className="absolute w-screen aspect-video top-0 left-0  h-full object-cover opacity-90"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&loop=1&controls=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>

    </div>
  );
};

export default VideoBackground;
