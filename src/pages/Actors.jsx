import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"; // ✅ Add this

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("/actors")
      .then(res => res.json())
      .then(setActors);
  }, []);

  return (
    <>
      <NavBar /> {/* ✅ Add this line */}
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <div key={actor.name}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default Actors;
