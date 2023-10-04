import React from "react";
import Movie from "./Components/Movie";
import { movies } from "./movieDummy";
import "./css/Movie.css";

function App() {
  const moviesPerPage = 2;
  const movieRows = [];
  console.log(movies.results.length);

  for (let i = 0; i < movies.results.length; i += moviesPerPage) {
    const rowMovies = movies.results.slice(i, i + moviesPerPage);
    console.log(rowMovies);
    const movieRow = (
      <div className="row2" key={`row-${i}`}>
        {rowMovies.map((item) => (
          <Movie key={item.id} data={item} />
        ))}
      </div>
    );

    movieRows.push(movieRow);
  }

  return <div className="app-container">{movieRows}</div>;
}

export default App;
