import { useParams } from 'react-router-dom';
import useQuery from '../hook/useQuery';
import { MovieDetailDbResponse } from '../utilities/types';
import Button from '../components/Button';
import MovieDetailHeader from '../components/MovieDetailHeader';

function MovieDetails() {
  const { id } = useParams();

  const { data } = useQuery<MovieDetailDbResponse>(
    `https://api.themoviedb.org/3/movie/${id}?api_key=7bdc02c5d27a184488dd56b87a8cad76&language=en-US`
  );

  return (
    <article className='pt-7'>
      <MovieDetailHeader children='Movie Detail' goBackTo='/' svg={true}/>
      <div className='px-5 flex flex-col'>
        <img
          className="rounded-md"
          src={`https://image.tmdb.org/t/p/w500${data?.backdrop_path}`}
          alt={data?.title}
        />
        <h2 className='typography-title'>{data?.title}</h2>
        <div>
          <p className='typography-title'>{data?.release_date}</p>
          {/* <p>{data?.genres }</p> */}
          <p className='typography-body'>{data?.runtime}</p>
          <p className='typography-body'>{data?.vote_average}</p>
        </div>
        <div>
          <div>
            <div className='typography-body font-bold'>Director: Lorem, ipsum.</div>
            <div className='typography-body'>Writer: Lorem, Ipsum.</div>
          </div>
          <button>Cast and Crew</button>
        </div>
        <hr></hr>
        <h2 className='typography-title'>Synopsis</h2>
        <p className='typography-body'>{data?.overview}</p>
        <a href="%">Read more</a>
        <div className='bg-slate-500 flex-grow'></div>
        <Button />
      </div>
    </article>
  );
}

export default MovieDetails;
