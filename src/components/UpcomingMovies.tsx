import React from 'react';

type UpcomingMovies = React.HTMLAttributes<HTMLElement>;

function UpcomingMovies({ children }: UpcomingMovies) {
  return (
    <>
      <h2 className="text-xl">text</h2>
      <section className="flex gap-5 overflow-y-clip justify-center snap-mandatory snap-x">
        <div className="bg-slate-500 h-40 w-20 shrink-0 snap-center"></div>
        <div className="bg-slate-500 h-40 w-20 shrink-0 snap-center"></div>
        <div className="bg-slate-500 h-40 w-20 shrink-0 snap-center"></div>
        <div className="bg-slate-500 h-40 w-20 shrink-0 snap-center"></div>
        <div className="bg-slate-500 h-40 w-20 shrink-0 snap-center"></div>
      </section>
    </>
  );
}

export default UpcomingMovies;
