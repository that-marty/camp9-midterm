import React, { Key } from 'react';
import { useState } from 'react';
import clsx from 'clsx';

type Button = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface PaginationButtons extends Button {
  btnid: number;
}
function PaginationButtons({ btnid, ...props }: PaginationButtons) {
  const [state, setState] = useState(1);
  const [active, setActive] = useState(false);
  const paginationNumbers = [1, 2, 3, 4, 5];
  let backgroundcolour = 'bg-[#FFFFFF/40]';

  return (
    <div>
      {paginationNumbers.map((value: number, index) => {
        if (state === btnid) {
          setActive(true);
        }
        return (
          <button
            btnid={value}
            onClick={e => {
              setState(btnid);
            }}
            className={
              (clsx(active === true ? 'bg-[#FFB43A]' : 'bg-[#FFFFFF/40]'),
              'first-line:w-8 h-8, rounded-sm')
            }
          >
            <p>{btnid}</p>
          </button>
        );
      })}
    </div>
  );
}

export default PaginationButtons;
