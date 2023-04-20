export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
};

export type MovieDbResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type MovieDetailDbResponse = {
  title: string;
  backdrop_path: string;
  release_date: string;
  genres: Array<{
    id: number;
    name: string;
  }>;
  runtime: number;
  vote_average: number;
  overview: string;
  imdb_id: string;
};
