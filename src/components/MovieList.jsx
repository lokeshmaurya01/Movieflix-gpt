import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-2xl md:text-3xl font-semibold py-4 text-white">
        {title}
      </h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <Link to={"/movieinfo/" + movie?.id}>
              <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
                title={movie.title}
                date={movie.release_date}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
