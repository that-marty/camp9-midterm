import React, { Key } from 'react';
import { useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface PaginationButtons {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}

function PaginationButtons({ setState, state }: PaginationButtons) {
  const paginationNumbers = [1, 2, 3, 4, 5];
  return (
    <div className="w-screen flex justify-between">
      {paginationNumbers.map((value: number, index) => {
        return (
          <Link
            to={'1'}
            key={index}
            onClick={e => {
              setState(value);
            }}
            className={clsx(
              state === value ? 'bg-[#FFB43A]' : 'bg-[#FFFFFF] opacity-40',
              ' w-8 h-8, rounded-sm text-center'
            )}
          >
            <p>{value}</p>
          </Link>
        );
      })}
    </div>
  );
}
export default PaginationButtons;
