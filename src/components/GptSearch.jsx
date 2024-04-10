import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import backGround1 from "../utils/images/Designer.png";
import backGround2 from "../utils/images/background.png";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={backGround2} alt="background image" />
      </div>
      {/* gptSearchBar 
    Gpt Suggestions on thge basis of search*/}
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
