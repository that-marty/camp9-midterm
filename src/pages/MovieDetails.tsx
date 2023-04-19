import { useParams } from "react-router-dom";
import useQuery from "../hook/useQuery";
import { MovieDetailDbResponse } from "../utilities/types";

function MovieDetails() {
  const { id } = useParams();

  const { data } = useQuery<MovieDetailDbResponse>(
    `https://api.themoviedb.org/3/movie/${id}?api_key=7bdc02c5d27a184488dd56b87a8cad76&language=en-US`
  );
  
  // const movieDetails = data?.;


  return (
    <>
      <h1 className="typography-title">Movie Detail for {id} {data?.overview}</h1>
    </>
  );
}

export default MovieDetails;
