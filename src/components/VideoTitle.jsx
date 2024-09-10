import React from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-3xl font-semibold mb-4">{title}</h1>
      <p className="py-6 text-lg w-1/3 leading-relaxed">{overview}</p>
      <div className="flex space-x-4">
        <button className="flex items-center bg-white text-black font-bold py-3 px-8 rounded-md hover:bg-gray-300 transition duration-300">
          <FaPlay className="mr-2" />
          Play
        </button>
        <button className="flex items-center bg-gray-700 text-white font-bold py-3 px-8 rounded-md hover:bg-gray-600 transition duration-300">
          <AiOutlineInfoCircle className="mr-2" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
