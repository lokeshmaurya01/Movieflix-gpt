import React from "react";
import { IMG_CDN_URL } from "../utils/constantFile.js";
import DummyCard from "./Shimmer/DummyCard.jsx";

const MovieCard = ({ posterPath, title, date }) => {
  if (!posterPath) return <DummyCard />;
  return (
    <div className="w-36  md:w-48 pr-4  hover:scale-[90%] hover:object-scale-down tranform transition duration-300">
      <img
        className="rounded-xl"
        src={IMG_CDN_URL + posterPath}
        alt="MovieCard"
      />
      <h2 className="text-white text-lg font-semibold text-center mt-1 text-ellipsis">
        {title}
      </h2>
      <div className="border-2 border-gray-600 w-1/2 mx-auto border-opacity-50 "></div>
      <p className="text-white text-center">{date}</p>
    </div>
  );
};

export default MovieCard;
