import React from "react";
import { IMG_CDN_URL } from "../utils/constantFile.js";
import DummyCard from "./Shimmer/DummyCard.jsx";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return <DummyCard />;
  return (
    <div className="w-36  md:w-48 mr-4  hover:scale-[90%] hover:object-scale-down tranform transition duration-300">
      <img
        className="rounded-xl"
        src={IMG_CDN_URL + posterPath}
        alt="MovieCard"
      />
    </div>
  );
};

export default MovieCard;
