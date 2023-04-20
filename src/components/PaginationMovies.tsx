import React from 'react';
import useQuery from '../hook/useQuery';

export default async function PaginationMovies() {
  const { isError, isLoading, data } = await useQuery();

  return <div>movie.poster_path</div>;
}
