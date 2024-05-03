import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS } from "../../utils/constantFile";
import Loader from "../Shimmer/Loader";
import Header from "../Header";
import MovieInfoContainer from "./MovieInfoContainer";
import { BANNER_IMG_CDN_URL } from "../../utils/constantFile";

const MovieInfo = () => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const fetchMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id,
      API_OPTIONS
    );
    const json = await data.json();
    setInfo(json);
    console.log(json);
  };
  useEffect(() => {
    fetchMovie();
  });
  if (!info) return <Loader />;

  return (
    <div>
      <div className="w-full min-h-[110vh] md:min-h-screen top-0 absolute -z-10 overflow-hidden bg-black">
        <img
          className="h-[110vh] md:h-auto object-cover mx-auto brightness-[.3]"
          src={BANNER_IMG_CDN_URL + info.backdrop_path}
          alt="moviebg"
        />
      </div>
      <MovieInfoContainer info={info} />
    </div>
  );
};

export default MovieInfo;
