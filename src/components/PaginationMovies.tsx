import React from 'react';
import useQuery from '../hook/useQuery';
import type { MovieDbResponse } from '../utilities/types';
import type { Movie } from '../utilities/types';

interface PaginationMovies {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}

export default function PaginationMovies({
  state,
  setState,
}: PaginationMovies) {
  console.log(state);
  const { isError, isLoading, data } = useQuery<MovieDbResponse>(
    'https://api.themoviedb.org/3/movie/upcoming?api_key=b83392e48747a4845ad80c2011eaa33b'
  );
  const allMovies = data?.results;
  if (isError) {
    return <h1>"Couldn't find the movies, sorry"</h1>;
  }
  if (isLoading) {
    return <h1>'wait a sec...'</h1>;
  }
  let fourMovies = allMovies;
  switch (state) {
    case 1:
      fourMovies = allMovies?.splice(5);
      break;
    case 2:
      fourMovies = allMovies?.slice(4, 8);
      break;
    case 3:
      fourMovies = allMovies?.slice(8, 12);
      break;
    case 4:
      fourMovies = allMovies?.slice(12, 16);
      break;
    case 5:
      fourMovies = allMovies?.slice(16, 20);
      break;
  }
  return (
    <div className="flex ">
      {fourMovies?.map((movie, index) => {
        let image = movie.poster_path;
        return (
          <div className={'h-10 w-10 bg-red'} key={index}>
            <img src={`https://image.tmdb.org/t/p/original/${image}`}></img>
          </div>
        );
      })}
    </div>
  );
}
