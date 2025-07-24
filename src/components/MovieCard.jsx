// src/components/MovieCard.jsx
import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2> {/* ✅ This line is REQUIRED for the test */}
      <p>{movie.time} minutes</p>
      <Link to={`/movie/${movie.id}`}>View Info</Link>
    </div>
  );
}

export default MovieCard;
