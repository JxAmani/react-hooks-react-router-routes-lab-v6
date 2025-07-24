import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/movies/${id}`) // ✅ Relative path
      .then((r) => r.json())
      .then(setMovie);
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map((genre) => (
        <span key={genre}>{genre}</span>
      ))}
    </>
  );
}

export default Movie;
