import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constantApi";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // Search Movie in TMDB DATABASE
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    // Make an API call to get movie results
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 5 movies,comma separated like the example result given ahead.Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices)
      return <h1>Prompt Invalid/ Not able to evaluate</h1>;
    console.log(gptResults.choices?.[0]?.message?.content);
    //  content: 1. My Sassy Girl, 2. The Beauty Inside, 3. 20th Century Boy and Girl, 4. Extreme Job,
    // 5. The Accidental Detective
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ");
    // gptMovies=['1. My Sassy Girl', ' 2. The Beauty Inside', ' 3. 20th Century Boy and Girl',
    // ' 4. Extreme Job', ' 5. The Accidental Detective']

    // Now For each movie search it in TMDB API
    console.log(gptMovies);
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    //promiseArray=[promise,promise,promise,promise,promise]

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black bg-opacity-40 rounded-md grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className=" col-span-9 p-4 m-4 rounded-md"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className=" col-span-3 m-5 py-2 px-4 bg-red-500 font-bold text-white rounded-mg text-xl rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
