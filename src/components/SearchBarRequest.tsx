import axios from 'axios';
import { useState, useEffect } from 'react';

type Movies = {};

export default function SearchBarRequest() {
  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
    const apiUrl =
      'https://api.themoviedb.org/3/movie/popular?api_key=7bdc02c5d27a184488dd56b87a8cad76';

    axios
      .get(apiUrl)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
    console.log(movies);
  }, []);

  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
}
