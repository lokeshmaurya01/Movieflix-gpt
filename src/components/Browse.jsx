import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  //Fetch data from TMDB API and update the store
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
            -Main Container
              -Video Background
              -Video Title
            - Secondary Container
              - Movielist *n
                - card *n
      */}
    </div>
  );
};

export default Browse;
