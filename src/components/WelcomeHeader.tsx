import React from 'react';
import Avatar from '../assets/Avatar.png';

export default function WelcomeHeader() {
  return (
    <header className="mx-5 mt-8 flex justify-between bg-[#1C1C27]">
      <div className="flex flex-col justify-between">
        <h3 className="font-sans font-bold text-xs text-white opacity-40">
          Welcome Dan👋
        </h3>
        <h1 className="text-white font-bold text-sm">
          Let's relax and watch a movie!
        </h1>
      </div>
      <a href="/">
        <img src={Avatar}></img>
      </a>
    </header>
  );
}
