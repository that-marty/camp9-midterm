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

export type MovieDbCreditsResponse = {
  id: number;
  cast: { id: number; name: string; character: string; imgUrl: string }[];
  crew: { id: number; name: string; job: string; imgUrl: string }[];
};
