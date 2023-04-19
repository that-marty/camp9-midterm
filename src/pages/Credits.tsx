import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import { MovieDbCreditsResponse, TMDBCast } from '../utilities/types';
import useQuery from '../hook/useQuery';
import { useParams } from 'react-router-dom';
import axios from 'axios';

type CastImage = {
  id: number;
  imgUrl: string;
};

function Credits() {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery<MovieDbCreditsResponse>(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=b83392e48747a4845ad80c2011eaa33b&language=en-US`
  );
  const [castImages, setCastImages] = useState<CastImage[]>([]);
  const [crewImages, setCrewImages] = useState<string[]>();
  // when credits data is fetched, fetch an image url for each cast and crew member and add it to the corresponding object in the credits data
  useEffect(() => {
    if (data)
      if (data?.cast) {
        for (const castMember of data?.cast) {
          axios
            .get(
              `https://api.themoviedb.org/3/person/${castMember.id}/images?api_key=b83392e48747a4845ad80c2011eaa33b`
            )
            .then(result => {
              try {
                castMember.imgUrl = `https://image.tmdb.org/t/p/original${result.data.profiles[0].file_path}`;
              } catch {
                castMember.imgUrl = 'NO IMAGE FOUND';
              }
              const newCastImage = {
                id: castMember.id,
                imgUrl: castMember.imgUrl,
              };
              console.log(newCastImage);
              setCastImages(oldImages => [...oldImages, newCastImage]);
              // console.log(data.cast);
            });
        }
      }
  }, [data]);

  console.log(castImages);
  console.log(data?.cast);
  if (isLoading)
    return (
      <section className="py-9 px-6 mb-2">
        <PageHeader>Cast & Crew</PageHeader>
        <h4 className="typography-title text-white">LOADING.....</h4>
      </section>
    );
  else if (isError)
    return (
      <section className="py-9 px-6 mb-2">
        <PageHeader>Cast & Crew</PageHeader>
        <div className="my-4">
          <h4 className="typography-body">
            Error with fetching credits info for movie id {id}
          </h4>
          <h4 className="typography-description">{isError}</h4>
        </div>
      </section>
    );
  else
    return (
      <section className="py-9 px-6 mb-2">
        <PageHeader>Cast & Crew</PageHeader>
        <div className="text-white flex justify-between m-6">
          <button>cast</button>
          <button>crew</button>
        </div>
        <ul className="flex flex-col gap-4 text-white">
          {data?.cast.map(castmember => (
            <li key={castmember.name} className="h-16 bg-white-dimmed">
              {castmember.name}
              <img
                className="w-20 h-20"
                src={castImages[data.cast.indexOf(castmember)]?.imgUrl}
              />
            </li>
          ))}
        </ul>
        <footer className="w-screen h-10 bg-dark fixed -bottom-2 left-0"></footer>
      </section>
    );
}

export default Credits;
