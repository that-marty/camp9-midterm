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
// types for credits
export type TMBDImageResponse = {
  profiles: { file_path: string }[];
};

export type TMDBCast = {
  id: number;
  name: string;
  character: string;
  imgUrl: string;
};

export type MovieDbCreditsResponse = {
  id: number;
  cast: TMDBCast[];
  crew: { id: number; name: string; job: string; imgUrl: string }[];
};
