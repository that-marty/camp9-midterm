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
  const [fetchedCastImages, setFetchedCastImages] = useState(false);
  const [crewImages, setCrewImages] = useState<string[]>();
  // when credits data is fetched, fetch an image url for each cast and crew member and add it to the corresponding object in the credits data
  useEffect(() => {
    console.log('inUseEffect');
    if (data) {
      if (data?.cast && !fetchedCastImages) {
        for (const castMember of data.cast) {
          let newCastImage = {
            id: castMember.id,
            imgUrl: 'LOADING',
          };
          axios
            .get(
              `https://api.themoviedb.org/3/person/${castMember.id}/images?api_key=b83392e48747a4845ad80c2011eaa33b`
            )
            .then(result => {
              try {
                newCastImage.imgUrl = `https://image.tmdb.org/t/p/original${result.data.profiles[0].file_path}`;
              } catch {
                newCastImage.imgUrl = 'NO IMAGE FOUND';
              }
              setCastImages(oldImages => [...oldImages, newCastImage]);
            })
            .catch(err => {
              console.log(err);
              newCastImage.imgUrl = 'NO IMAGE FOUND';
              setCastImages(oldImages => [...oldImages, newCastImage]);
            });
        }
        setFetchedCastImages(false);
      }
    }
    return () => {
      console.log('in cleanup');
    };
  }, [data]);

  console.log(castImages);
  console.log(castImages.length);
  console.log(data?.cast.length);
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
                src={castImages.find(el => el.id == castmember.id)?.imgUrl}
              />
            </li>
          ))}
        </ul>
        <footer className="w-screen h-10 bg-dark fixed -bottom-2 left-0"></footer>
      </section>
    );
}

export default Credits;
