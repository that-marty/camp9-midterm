import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import { MovieDbCreditsResponse } from '../utilities/types';
import useQuery from '../hook/useQuery';
import { useParams } from 'react-router-dom';
import axios from 'axios';

type TMBDImageResponse = {
  profiles: { file_path: string }[];
};

function Credits() {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery<MovieDbCreditsResponse>(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=b83392e48747a4845ad80c2011eaa33b&language=en-US`
  );
  const [castmages, setCastImages] = useState<string[]>();
  const [crewImages, setCrewImages] = useState<string[]>();

  useEffect(() => {
    if (data?.cast) {
      for (const castMember of data?.cast) {
        axios
          .get(
            `https://api.themoviedb.org/3/person/${castMember.id}/images?api_key=b83392e48747a4845ad80c2011eaa33b`
          )
          .then(result => {
            console.log(result.data.profiles[0].file_path);
          });
      }
    }
  }, [data]);

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
                className="w-10 h-10"
                src="https://image.tmdb.org/t/p/original/ewNO5cjiCa3d1qKnPhrapyz58od.jpg"
              />
            </li>
          ))}
        </ul>
        <footer className="w-screen h-10 bg-dark fixed -bottom-2 left-0"></footer>
      </section>
    );
}

export default Credits;
