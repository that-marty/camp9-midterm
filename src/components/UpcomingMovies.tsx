import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

type UpcomingMovies = React.HTMLAttributes<HTMLElement>;
interface Movie {
  id: number;
  title: string;
  poster_path: string;
};

export default function UpcomingMovies({ children }: UpcomingMovies) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=b83392e48747a4845ad80c2011eaa33b`)
      .then((response) => {
        setMovies(response.data.results);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
       {movies.map((movie: Movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
      ))}
      <h2 className="text-xl">text</h2>
      <section className="flex gap-5 overflow-y-clip justify-center snap-mandatory snap-x">
        <div className="bg-slate-500 h-40 w-20 shrink-0 snap-center"></div>
        <div className="bg-slate-500 h-40 w-20 shrink-0 snap-center"></div>
        <div className="bg-slate-500 h-40 w-20 shrink-0 snap-center"></div>
        <div className="bg-slate-500 h-40 w-20 shrink-0 snap-center"></div>
        <div className="bg-slate-500 h-40 w-20 shrink-0 snap-center"></div>
      </section>
    </>
  );
}
