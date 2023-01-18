import React from "react";
import { Link } from "react-router-dom";

const MoviesList = ({ movies }) => {
  const renderMovies = Object.keys(movies).map(movieID => (
    <Link
      key={movieID}
      to={`/movies/${movieID}`}
    >
      <p>{movies[movieID].title}</p>
    </Link>
  ));

  return (
    <div className="movies-list">
      {renderMovies}
    </div>
  );

};

export default MoviesList;