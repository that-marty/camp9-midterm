import clsx from 'clsx';
import React, { useState } from 'react';

type Button = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends Button {
  children: string;
  isSelected: boolean;
}

function BookingBtn({ disabled, isSelected, children }: Props) {
  const [selected, setSelected] = useState(false);

  return (
    <button
      disabled={disabled}
      onClick={() => setSelected(!selected)}
      className={clsx(
        'w-20 h-7 rounded-md disabled:text-white-dimmed-heavy disabled:bg-dark',
        selected ? ' text-dark-light bg-yellow' : 'text-white-dimmed'
      )}
    >
      {children}
    </button>
  );
}

export default BookingBtn;
