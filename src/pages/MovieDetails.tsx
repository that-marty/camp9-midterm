import { useParams } from 'react-router-dom';
import useQuery from '../hook/useQuery';
import { MovieDetailDbResponse } from '../utilities/types';
import Button from '../components/Button';

function MovieDetails() {
  const { id } = useParams();

  const { data } = useQuery<MovieDetailDbResponse>(
    `https://api.themoviedb.org/3/movie/${id}?api_key=7bdc02c5d27a184488dd56b87a8cad76&language=en-US`
  );

  return (
    <>
      <h1 className="typography-title">Movie Detail </h1>
      <img
        className="rounded-md"
        src={`https://image.tmdb.org/t/p/w500${data?.backdrop_path}`}
        alt={data?.title}
      />
      <h2>{data?.title}</h2>
      <div>
        <p>{data?.release_date}</p>
        {/* <p>{data?.genres }</p> */}
        <p>{data?.runtime}</p>
        <p>{data?.vote_average}</p>
      </div>
      <div>
        <div>
          <div>Director: Lorem, ipsum.</div>
          <div>Writer: Lorem, Ipsum.</div>
        </div>
        <button>Cast and Crew</button>
      </div>
      <hr></hr>
      <h2>Synopsis</h2>
      <p>{data?.overview}</p>
      <a href="%">Read more</a>
      <Button />
      
    </>
  );
}

export default MovieDetails;
