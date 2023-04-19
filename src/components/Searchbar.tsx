/* This is a React component that renders a search bar with autocomplete functionality using the
`Combobox` and `Transition` components from the `@headlessui/react` library. It also uses icons from
the `@heroicons/react` library. The component maintains state using the `useState` hook and updates
the state using the `onChange` event. It also uses the `useEffect` hook to add an event listener to
focus the search bar input when the search bar is clicked. */

import React, { Fragment, useState, useEffect } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon, CheckIcon } from '@heroicons/react/20/solid';
import useQuery from '../hook/useQuery';
import { Movie, MovieDbResponse } from '../utilities/types';
import axios from 'axios';

// const movie = [
//   { id: 1, title: 'Wade Cooper' },
//   { id: 2, title: 'Arlene Mccoy' },
//   { id: 3, title: 'Devon Webb' },
//   { id: 4, title: 'Tom Cook' },
//   { id: 5, title: 'Tanya Fox' },
//   { id: 6, title: 'Hellen Schmidt' },
// ]

function Searchbar() {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState<Movie[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=7bdc02c5d27a184488dd56b87a8cad76&language=en-US&query=${query}&include_adult=false`
      )
      .then(res => setMovie(res.data.results))
      .catch();
  }, [query]);

  const filtereddata =
    query === ''
      ? movie
      : movie?.filter(movie =>
          movie.title
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  useEffect(() => {
    function focusSearchbar() {
      const sbar = document.querySelector('.sbar') as HTMLDivElement;
      const sbarInput = document.querySelector(
        '.sbar__input'
      ) as HTMLInputElement;
      sbar.addEventListener('click', () => {
        sbarInput.focus();
      });
    }
    focusSearchbar();
  }, []);

  return (
    <Combobox value={query} onChange={setQuery}>
      <div className="w-[20.938rem] h-[3rem]">
        <div className="sbar bg-[#363740] w-[20.938rem] h-[3rem] rounded-full flex items-center">
          <div className="sbar__icon border-solid py-[0.938rem] pl-[1.438rem] pr-[1.188rem]">
            <MagnifyingGlassIcon
              className="icon text-[#86878c] "
              style={{
                width: '18px',
              }}
            />
          </div>
          <Combobox.Input
            className="sbar__input bg-transparent mr-[1.438rem] flex-1 outline-0 text-[#9ca3af]"
            onChange={event => setQuery(event.target.value)}
            placeholder="Search"
          />
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className="absolute mt-1 max-h-60 w-[20.938rem] overflow-auto rounded-md bg-[#363740] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filtereddata?.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4 text-[#9ca3af]">
                Nothing found.
              </div>
            ) : (
              filtereddata?.map(movie => (
                <Combobox.Option
                  key={movie.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-[#FFB43A] text-[363740]' : 'text-[#9ca3af]'
                    }`
                  }
                  value={movie}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {movie.title}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? 'text-white' : 'text-[#FFB43A]'
                          }`}
                        >
                          <CheckIcon className="h-5 w-5 " aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
}
export default Searchbar;
